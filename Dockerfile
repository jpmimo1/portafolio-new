# Etapa 1: dependencias
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar solo lo necesario para instalar dependencias
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else npm install; \
  fi

# Etapa 2: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Etapa 3: producción
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Crear usuario sin privilegios
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Crear carpetas necesarias y asignar permisos al usuario nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar la carpeta public (imágenes estáticas, favicon, etc.)
COPY --from=builder /app/public ./public

# Copiar el output standalone generado por Next.js
# Esto incluye un server.js minificado y solo las dependencias estrictamente necesarias
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copiar los archivos estáticos de Next.js al directorio standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]