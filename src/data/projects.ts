export const ProjectsText: { [key in TLanguages]: TProjectsContent } = {
  es: {
    title: "Mis Proyectos",
    subTitle:
      "Aquí encontrarás algunos de los proyectos que he desarrollado, utilizando tecnologías modernas y buenas prácticas de desarrollo.",
    projects: [
      {
        id: "1",
        title: "VideoOptima – Plataforma Asíncrona de Procesamiento de Video",
        description:
          "Optimiza, recorta y transforma videos de forma asíncrona mediante microservicios y colas de tareas con FFmpeg.",
        descriptionLong:
          "Plataforma de alto rendimiento diseñada bajo una arquitectura de microservicios desacoplados para el procesamiento asíncrono de video. Utiliza un patrón de doble rol donde una API HTTP gestiona peticiones y genera URLs firmadas para cargas directas a la nube, mientras que un Worker dedicado consume tareas pesadas de una cola distribuida en Redis (BullMQ). El procesamiento de video (compresión, recortes, capturas y cambios de formato) se ejecuta nativamente mediante binarios de FFmpeg sobre contenedores Docker optimizados con imágenes multi-stage y Alpine Linux. Cuenta con persistencia en PostgreSQL con Prisma 7, almacenamiento en Cloudflare R2 con cuotas automáticas de retención de datos, y comunicación en tiempo real mediante eventos.",
        technologies: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "Docker",
          "Prisma ORM",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "FFmpeg",
          "Cloudflare R2",
          "Zustand",
        ],
        urlLive: "https://videooptima.jeanpaulflores.com",
        urlRepository: "https://github.com/jpmimo1/video-optimizer",
        urlProject:
          "videooptima-plataforma-asincrona-de-procesamiento-de-video",
        mainImage: "/images/projects/videooptima-0.webp",
        gallery: [
          "/images/projects/videooptima-0.webp",
          "/images/projects/videooptima-1.webp",
          "/images/projects/videooptima-2.webp",
          "/images/projects/videooptima-3.webp",
        ],
        keyWords: [
          "Microservicios",
          "Procesamiento Asíncrono",
          "Docker Compose",
          "FFmpeg",
          "BullMQ & Redis",
          "Cloudflare R2",
        ],
      },
      {
        id: "2",
        title: "Weather App – Clima en tiempo real",
        description:
          "Consulta el clima en cualquier lugar, con diseño dinámico según la hora del día.",
        descriptionLong:
          "Aplicación web que ofrece información meteorológica en tiempo real, adaptada a cada usuario. Detecta la ubicación automáticamente mediante permisos del navegador o, en caso de denegarse, a través de la dirección IP. Muestra datos completos del clima: temperatura actual, condición atmosférica, pronóstico por horas y por días, además de la hora local. Permite buscar y guardar múltiples ciudades mediante un sistema de sugerencias inteligentes. La interfaz se adapta dinámicamente al momento del día: clara en el día, oscura en la noche y rojiza en amaneceres o atardeceres.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "shadcn/ui",
          "Tailwind CSS",
          "Zustand",
        ],
        urlLive: "https://weather-app-two-wine-13.vercel.app/",
        urlRepository: "https://github.com/jpmimo1/weatherApp",
        urlProject: "weather-app-clima-en-tiempo-real",
        mainImage: "/images/projects/weather-app-01.webp",
        gallery: [
          "/images/projects/weather-app-01.webp",
          "/images/projects/weather-app-02.webp",
          "/images/projects/weather-app-03.webp",
          "/images/projects/weather-app-04.webp",
        ],
        keyWords: [
          "React",
          "Next.js",
          "APIs de clima",
          "Geolocalización",
          "UI dinámica",
        ],
      },
    ],
  },
  en: {
    title: "My Projects",
    subTitle:
      "Here you can explore some of the projects I’ve built, using modern technologies and best development practices.",
    projects: [
      {
        id: "1",
        title: "VideoOptima – Asynchronous Video Processing Platform",
        description:
          "Optimize, trim, and transform videos asynchronously using microservices and job queues powered by FFmpeg.",
        descriptionLong:
          "A high-performance platform engineered under a decoupled microservices architecture for asynchronous video manipulation. It implements a dual-role pattern where an HTTP API manages user requests and creates pre-signed URLs for direct cloud uploads, while a headless Worker node consumes compute-heavy tasks from a distributed Redis queue (BullMQ). All video pipelines (compression, trimming, thumbnails, and container conversion) execute natively via FFmpeg binaries inside optimized multi-stage Alpine Linux Docker containers. Features database persistence using PostgreSQL with Prisma 7, Cloudflare R2 object storage with automatic 24-hour retention policies, and real-time status updates through event streams.",
        technologies: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "Docker",
          "Prisma ORM",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "FFmpeg",
          "Cloudflare R2",
          "Zustand",
        ],
        urlLive: "https://videooptima.jeanpaulflores.com",
        urlRepository: "https://github.com/jpmimo1/video-optimizer",
        urlProject: "videooptima-asynchronous-video-processing-platform",
        mainImage: "/images/projects/videooptima-0.webp",
        gallery: [
          "/images/projects/videooptima-0.webp",
          "/images/projects/videooptima-1.webp",
          "/images/projects/videooptima-2.webp",
          "/images/projects/videooptima-3.webp",
        ],
        keyWords: [
          "Microservices",
          "Asynchronous Processing",
          "Docker Compose",
          "FFmpeg",
          "BullMQ & Redis",
          "Cloudflare R2",
        ],
      },
      {
        id: "2",
        title: "Weather App – Real-time Weather",
        description:
          "Check the weather anywhere, with a dynamic design that adapts to the time of day.",
        descriptionLong:
          "A web application that provides real-time weather information, tailored to each user. It automatically detects location through browser permissions or, if denied, via the user’s IP address. Displays complete weather data: current temperature, atmospheric conditions, hourly and daily forecasts, as well as local time. Users can search and save multiple cities through an intelligent suggestion system. The interface adapts dynamically to the time of day: light during the day, dark at night, and reddish tones at sunrise or sunset.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "shadcn/ui",
          "Tailwind CSS",
          "Zustand",
        ],
        urlLive: "https://weather-app-two-wine-13.vercel.app/",
        urlRepository: "https://github.com/jpmimo1/weatherApp",
        urlProject: "weather-app-real-time-weather",
        mainImage: "/images/projects/weather-app-01.webp",
        gallery: [
          "/images/projects/weather-app-01.webp",
          "/images/projects/weather-app-02.webp",
          "/images/projects/weather-app-03.webp",
          "/images/projects/weather-app-04.webp",
        ],
        keyWords: [
          "React",
          "Next.js",
          "Weather APIs",
          "Geolocation",
          "Dynamic UI",
        ],
      },
    ],
  },
};
