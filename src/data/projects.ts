const KanchaImages: TProjectImageSource[] = [
  {
    id: "kancha-home",
    src: "/images/projects/kancha-1.webp",
    alt: {
      es: "Inicio de Kancha con búsqueda de espacios deportivos por deporte y ubicación.",
      en: "Kancha homepage with sports venue search by sport and location.",
    },
    caption: {
      es: "Búsqueda de espacios deportivos por deporte y ubicación.",
      en: "Find sports venues by sport and location.",
    },
  },
  {
    id: "kancha-nearby-venues",
    src: "/images/projects/kancha-2.webp",
    alt: {
      es: "Listado de espacios deportivos cercanos con fotografías, servicios y contacto por WhatsApp.",
      en: "Nearby sports venues with photos, amenities, and WhatsApp contact buttons.",
    },
    caption: {
      es: "Locales cercanos con servicios y contacto por WhatsApp.",
      en: "Nearby venues with amenities and WhatsApp contact options.",
    },
  },
  {
    id: "kancha-map-search",
    src: "/images/projects/kancha-3.webp",
    alt: {
      es: "Resultados de búsqueda de Kancha con filtros, tarjetas de locales y ubicaciones en el mapa.",
      en: "Kancha search results with filters, venue cards, and locations on a map.",
    },
    caption: {
      es: "Exploración de locales mediante resultados y mapa.",
      en: "Explore venues through search results and a map.",
    },
  },
  {
    id: "kancha-dashboard",
    src: "/images/projects/kancha-4.webp",
    alt: {
      es: "Panel de Kancha con resumen de reservas, ocupación, recaudación y próximos turnos.",
      en: "Kancha dashboard showing bookings, occupancy, revenue, and upcoming time slots.",
    },
    caption: {
      es: "Resumen operativo del local y próximos turnos.",
      en: "Venue operations overview and upcoming time slots.",
    },
  },
  {
    id: "kancha-court-settings",
    src: "/images/projects/kancha-5.webp",
    alt: {
      es: "Formulario de edición de cancha con estado, superficie, precio por hora y deportes permitidos.",
      en: "Court editing form with availability status, surface type, hourly price, and supported sports.",
    },
    caption: {
      es: "Configuración de las características y el precio base de una cancha.",
      en: "Court features and base hourly price settings.",
    },
  },
  {
    id: "kancha-booking-calendar",
    src: "/images/projects/kancha-6.webp",
    alt: {
      es: "Calendario diario de reservas de Kancha con horarios por cancha y reservas diferenciadas por color.",
      en: "Kancha daily booking calendar with time slots organized by court and color-coded bookings.",
    },
    caption: {
      es: "Calendario de reservas con horarios por cancha y estados diferenciados por color.",
      en: "Booking calendar with time slots by court and color-coded statuses.",
    },
  },
  {
    id: "kancha-public-page-sharing",
    src: "/images/projects/kancha-7.webp",
    alt: {
      es: "Panel para compartir la página pública del local y descargar su código QR.",
      en: "Panel for sharing a venue’s public page and downloading its QR code.",
    },
    caption: {
      es: "Enlace público y código QR para compartir el local.",
      en: "Public link and QR code for sharing the venue.",
    },
  },
  {
    id: "kancha-cash-summary",
    src: "/images/projects/kancha-8.webp",
    alt: {
      es: "Cierre de caja de Kancha con ingresos por método de pago y registro de operaciones.",
      en: "Kancha cash reconciliation view with income by payment method and a transaction log.",
    },
    caption: {
      es: "Resumen de ingresos por método de pago y registro de operaciones.",
      en: "Income summary by payment method and transaction log.",
    },
  },
  {
    id: "kancha-venue-location",
    src: "/images/projects/kancha-9.webp",
    alt: {
      es: "Configuración de la ubicación del local mediante un mapa y un campo de dirección.",
      en: "Venue location settings with a map and an address field.",
    },
    caption: {
      es: "Configuración de la dirección y ubicación del local.",
      en: "Venue address and map location settings.",
    },
  },
];

const VideoOptimaImages: TProjectImageSource[] = [
  {
    id: "videooptima-upload",
    src: "/images/projects/videooptima-1.webp",
    alt: {
      es: "Inicio de VideoOptima con área para seleccionar o arrastrar un archivo de video.",
      en: "VideoOptima homepage with an area to select or drag and drop a video file.",
    },
    caption: {
      es: "Carga de un video mediante selección de archivo o arrastrar y soltar.",
      en: "Upload a video by selecting a file or using drag and drop.",
    },
  },
  {
    id: "videooptima-processing-options",
    src: "/images/projects/videooptima-2.webp",
    alt: {
      es: "Herramientas de VideoOptima para comprimir, convertir, recortar y generar miniaturas, con selección del nivel de compresión.",
      en: "VideoOptima tools for compression, conversion, trimming, and thumbnail generation, with compression level options.",
    },
    caption: {
      es: "Selección de operación y configuración del nivel de compresión.",
      en: "Operation selection and compression level settings.",
    },
  },
  {
    id: "videooptima-processing-progress",
    src: "/images/projects/videooptima-3.webp",
    alt: {
      es: "Procesamiento de video en curso con indicador de estado y barra de progreso.",
      en: "Video processing in progress with a status indicator and progress bar.",
    },
    caption: {
      es: "Seguimiento del estado y progreso del procesamiento.",
      en: "Processing status and progress tracking.",
    },
  },
  {
    id: "videooptima-download-result",
    src: "/images/projects/videooptima-4.webp",
    alt: {
      es: "Resultado de compresión con comparación del tamaño original y optimizado y botón de descarga.",
      en: "Compression result comparing original and optimized file sizes, with a download button.",
    },
    caption: {
      es: "Comparación de tamaños y descarga del video procesado.",
      en: "File size comparison and processed video download.",
    },
  },
];

const localizeProjectImages = (
  images: TProjectImageSource[],
  language: TLanguages,
): TProjectImage[] =>
  images.map(({ id, src, alt, caption }) => ({
    id,
    src,
    alt: alt[language],
    ...(caption ? { caption: caption[language] } : {}),
  }));

const KanchaShared: TProjectShared = {
  id: "1",
  coverImageId: "kancha-booking-calendar",
  featuredTechnologies: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  technologies: [
    "Next.js",
    "NestJS",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "Clerk",
    "Cloudflare R2",
    "Docker",
    "Linux VPS",
    "Tailwind CSS",
  ],
  urlLive: "https://reservakancha.com",
};

const VideoOptimaShared: TProjectShared = {
  id: "2",
  coverImageId: "videooptima-processing-options",
  featuredTechnologies: ["Next.js", "NestJS", "BullMQ", "Redis", "FFmpeg"],
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
};

export const ProjectsText: { [key in TLanguages]: TProjectsContent } = {
  es: {
    title: "Proyectos destacados",
    subTitle:
      "Productos propios que he diseñado, desarrollado y desplegado, desde la interfaz y el backend hasta su puesta en producción.",
    labels: {
      viewProject: "Explorar proyecto",
      viewAllProjects: "Ver todos los proyectos",
      openApp: "Abrir aplicación",
      sourceCode: "Ver código",
      contribution: "Mi trabajo",
      role: "Mi rol",
      overview: "Sobre el proyecto",
      problem: "El problema",
      responsibilities: "Mi participación",
      features: "Funcionalidades principales",
      technicalDecisions: "Decisiones técnicas",
      deployment: "Despliegue y operación",
      technologies: "Tecnologías utilizadas",
      gallery: "Galería del proyecto",
      galleryImage: "Captura del proyecto",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      openImage: "Ampliar imagen",
      closeGallery: "Cerrar galería",
      pauseGallery: "Pausar galería",
      playGallery: "Reanudar galería",
      relatedProjects: "Otros proyectos",
      backToProjects: "Volver a proyectos",
    },
    projects: [
      {
        ...KanchaShared,
        gallery: localizeProjectImages(KanchaImages, "es"),
        title: "Kancha",
        subtitle: "Gestión y búsqueda de espacios deportivos",
        category: "Producto propio · Plataforma SaaS",
        description:
          "Plataforma para encontrar espacios deportivos y gestionar locales, canchas, horarios y reservas desde un panel de administración.",
        role: "Creador y desarrollador Full-Stack",
        contribution:
          "Diseño e implementación del producto, arquitectura multi-tenant, frontend, backend y despliegue.",
        urlProject: "kancha-plataforma-saas-multi-tenant-de-gestion-deportiva",
        details: {
          overview:
            "Kancha reúne una experiencia pública para descubrir espacios deportivos y un panel de gestión para sus administradores. Desarrollé el producto desde la definición de funcionalidades hasta su implementación y publicación.",
          problem:
            "La información de los espacios deportivos suele estar dispersa, mientras que la gestión de horarios y reservas puede depender de registros manuales y conversaciones. Kancha busca centralizar esa información y ofrecer herramientas para organizar la operación de cada local.",
          responsibilities: [
            "Definición de funcionalidades y flujos para jugadores y administradores.",
            "Diseño del modelo de datos y de la arquitectura multi-tenant.",
            "Desarrollo de la interfaz con Next.js y de la API con NestJS.",
            "Integración de autenticación, almacenamiento multimedia y despliegue.",
          ],
          features: [
            {
              title: "Descubrimiento de locales",
              description:
                "Búsqueda de espacios deportivos y perfiles públicos de locales.",
            },
            {
              title: "Registro guiado",
              description:
                "Onboarding para registrar un local y completar su información.",
            },
            {
              title: "Administración de canchas",
              description:
                "Gestión de canchas, horarios, precios y contenido multimedia.",
            },
            {
              title: "Calendario de reservas",
              description:
                "Registro manual de reservas y seguimiento de sus estados.",
            },
            {
              title: "Control de disponibilidad",
              description:
                "Bloqueos de horarios para mantenimiento u otras actividades.",
            },
          ],
          technicalDecisions: [
            {
              title: "Organización multi-tenant",
              description:
                "El modelo de datos organiza la información por local para permitir la administración independiente de canchas, horarios y reservas.",
            },
            {
              title: "Frontend y API separados",
              description:
                "Next.js resuelve la experiencia pública y el panel de administración, mientras que NestJS concentra la lógica de negocio y el acceso a los datos.",
            },
            {
              title: "Datos relacionales con PostgreSQL y Prisma",
              description:
                "Las relaciones entre locales, canchas y reservas se modelan en PostgreSQL, utilizando Prisma para el acceso a datos y la gestión de migraciones.",
            },
            {
              title: "Autenticación y almacenamiento",
              description:
                "Clerk gestiona la autenticación de usuarios y Cloudflare R2 almacena las imágenes de los locales y las canchas.",
            },
          ],
          deployment:
            "El frontend, la API y la base de datos se ejecutan en contenedores Docker sobre un VPS Linux. Me encargo de la configuración del entorno, las actualizaciones de la aplicación y las migraciones de base de datos.",
        },
        seo: {
          title: "Kancha | Plataforma de gestión deportiva — Jean Paul Flores",
          description:
            "Conoce cómo desarrollé Kancha, una plataforma para encontrar espacios deportivos y gestionar canchas y reservas con Next.js, NestJS y PostgreSQL.",
        },
        keyWords: [
          "SaaS",
          "Arquitectura multi-tenant",
          "Gestión deportiva",
          "Calendario de reservas",
          "Desarrollo Full-Stack",
        ],
      },
      {
        ...VideoOptimaShared,
        gallery: localizeProjectImages(VideoOptimaImages, "es"),
        title: "VideoOptima",
        subtitle: "Procesamiento de video en línea",
        category: "Proyecto propio · Procesamiento multimedia",
        description:
          "Aplicación para comprimir, convertir y recortar videos, con procesamiento en segundo plano y seguimiento del estado de cada tarea.",
        role: "Creador y desarrollador Full-Stack",
        contribution:
          "Desarrollo de la interfaz, API y workers de procesamiento, con colas de tareas, reintentos y almacenamiento de archivos.",
        urlProject:
          "videooptima-plataforma-asincrona-de-procesamiento-de-video",
        details: {
          overview:
            "VideoOptima permite realizar operaciones de procesamiento de video desde una interfaz web. La aplicación coordina la carga del archivo, la ejecución de la tarea y la entrega del resultado, separando las peticiones HTTP del trabajo intensivo de procesamiento.",
          problem:
            "El procesamiento de video puede tardar más que una petición web habitual y consumir recursos importantes del servidor. El proyecto aborda cómo ejecutar estas operaciones en segundo plano, informar su estado y gestionar los archivos generados.",
          responsibilities: [
            "Diseño del flujo de carga, configuración, procesamiento y descarga.",
            "Desarrollo del frontend con Next.js y de los servicios backend con NestJS.",
            "Implementación de colas de tareas, workers y operaciones con FFmpeg.",
            "Integración del almacenamiento de archivos y despliegue de los servicios.",
          ],
          features: [
            {
              title: "Carga de archivos",
              description:
                "Subida de videos al almacenamiento mediante URLs firmadas.",
            },
            {
              title: "Herramientas de video",
              description:
                "Compresión, conversión de formatos y recorte de videos.",
            },
            {
              title: "Generación de miniaturas",
              description:
                "Creación de imágenes a partir de fotogramas del video.",
            },
            {
              title: "Seguimiento de tareas",
              description:
                "Procesamiento en segundo plano con actualización del estado.",
            },
            {
              title: "Descarga de resultados",
              description:
                "Acceso a los archivos generados al finalizar el procesamiento.",
            },
          ],
          technicalDecisions: [
            {
              title: "Separación entre API y worker",
              description:
                "La API recibe las solicitudes y coordina las tareas. Un worker dedicado ejecuta las operaciones de video para evitar realizar el procesamiento dentro de la petición HTTP.",
            },
            {
              title: "Colas con BullMQ y Redis",
              description:
                "BullMQ utiliza Redis para gestionar las tareas pendientes, su ejecución y los reintentos ante fallos.",
            },
            {
              title: "Procesamiento con FFmpeg",
              description:
                "El worker ejecuta FFmpeg para aplicar compresión, recortes, conversiones de formato y generación de miniaturas.",
            },
            {
              title: "Archivos y persistencia",
              description:
                "Cloudflare R2 almacena los videos y resultados, con URLs firmadas para su transferencia. PostgreSQL y Prisma mantienen la información de los trabajos.",
            },
          ],
          deployment:
            "El frontend, la API, el worker, PostgreSQL y Redis se ejecutan como servicios en contenedores Docker sobre un VPS Linux. El entorno del worker incluye FFmpeg para ejecutar las operaciones de procesamiento.",
        },
        seo: {
          title:
            "VideoOptima | Procesamiento asíncrono de video — Jean Paul Flores",
          description:
            "Conoce cómo desarrollé VideoOptima con Next.js, NestJS, BullMQ, Redis y FFmpeg para procesar videos mediante tareas en segundo plano.",
        },
        keyWords: [
          "Procesamiento asíncrono",
          "Colas de tareas",
          "Workers",
          "Procesamiento de video",
          "URLs firmadas",
        ],
      },
    ],
  },
  en: {
    title: "Selected Projects",
    subTitle:
      "Independent products I’ve designed, developed, and deployed, from frontend and backend implementation to production.",
    labels: {
      viewProject: "Explore Project",
      viewAllProjects: "View All Projects",
      openApp: "Open App",
      sourceCode: "View Source",
      contribution: "My Work",
      role: "My Role",
      overview: "About the Project",
      problem: "The Problem",
      responsibilities: "My Contribution",
      features: "Key Features",
      technicalDecisions: "Technical Decisions",
      deployment: "Deployment & Operations",
      technologies: "Technologies Used",
      gallery: "Project Gallery",
      galleryImage: "Project screenshot",
      previousImage: "Previous image",
      nextImage: "Next image",
      openImage: "Enlarge image",
      closeGallery: "Close gallery",
      pauseGallery: "Pause slideshow",
      playGallery: "Resume slideshow",
      relatedProjects: "Other Projects",
      backToProjects: "Back to Projects",
    },
    projects: [
      {
        ...KanchaShared,
        gallery: localizeProjectImages(KanchaImages, "en"),
        title: "Kancha",
        subtitle: "Sports Venue Discovery & Management",
        category: "Independent Product · SaaS Platform",
        description:
          "A platform for finding sports venues and managing facilities, courts, schedules, and bookings through an administration dashboard.",
        role: "Creator & Full-Stack Developer",
        contribution:
          "Product design and implementation, multi-tenant architecture, frontend, backend, and deployment.",
        urlProject: "kancha-multi-tenant-sports-management-saas-platform",
        details: {
          overview:
            "Kancha combines a public experience for discovering sports venues with a management dashboard for venue administrators. I developed the product from defining its features through implementation and launch.",
          problem:
            "Information about sports venues is often scattered, while schedules and bookings may rely on manual records and conversations. Kancha aims to centralize this information and provide tools to organize each venue’s operations.",
          responsibilities: [
            "Defined features and workflows for players and venue administrators.",
            "Designed the data model and multi-tenant architecture.",
            "Built the interface with Next.js and the API with NestJS.",
            "Integrated authentication, media storage, and deployment.",
          ],
          features: [
            {
              title: "Venue Discovery",
              description:
                "Sports venue search and public venue profiles.",
            },
            {
              title: "Guided Setup",
              description:
                "Onboarding to register a venue and complete its information.",
            },
            {
              title: "Court Management",
              description:
                "Management of courts, schedules, pricing, and media.",
            },
            {
              title: "Booking Calendar",
              description:
                "Manual booking entry and status tracking.",
            },
            {
              title: "Availability Management",
              description:
                "Time blocks for maintenance or other activities.",
            },
          ],
          technicalDecisions: [
            {
              title: "Multi-tenant organization",
              description:
                "The data model organizes information by venue, allowing independent management of courts, schedules, and bookings.",
            },
            {
              title: "Separate frontend and API",
              description:
                "Next.js handles the public experience and administration dashboard, while NestJS centralizes business logic and data access.",
            },
            {
              title: "Relational data with PostgreSQL and Prisma",
              description:
                "Relationships between venues, courts, and bookings are modeled in PostgreSQL, with Prisma handling data access and migrations.",
            },
            {
              title: "Authentication and storage",
              description:
                "Clerk handles user authentication, while Cloudflare R2 stores venue and court images.",
            },
          ],
          deployment:
            "The frontend, API, and database run in Docker containers on a Linux VPS. I manage environment configuration, application updates, and database migrations.",
        },
        seo: {
          title:
            "Kancha | Sports Venue Management Platform — Jean Paul Flores",
          description:
            "Explore how I built Kancha, a platform for finding sports venues and managing courts and bookings with Next.js, NestJS, and PostgreSQL.",
        },
        keyWords: [
          "SaaS",
          "Multi-Tenant Architecture",
          "Sports Venue Management",
          "Booking Calendar",
          "Full-Stack Development",
        ],
      },
      {
        ...VideoOptimaShared,
        gallery: localizeProjectImages(VideoOptimaImages, "en"),
        title: "VideoOptima",
        subtitle: "Online Video Processing",
        category: "Independent Project · Media Processing",
        description:
          "An application for compressing, converting, and trimming videos, with background processing and job status tracking.",
        role: "Creator & Full-Stack Developer",
        contribution:
          "Development of the interface, API, and processing workers, including job queues, retries, and file storage.",
        urlProject: "videooptima-asynchronous-video-processing-platform",
        details: {
          overview:
            "VideoOptima provides video processing tools through a web interface. The application coordinates file uploads, job execution, and result delivery, separating HTTP requests from compute-intensive processing.",
          problem:
            "Video processing can take longer than a typical web request and consume substantial server resources. The project addresses how to run these operations in the background, report their status, and manage the resulting files.",
          responsibilities: [
            "Designed the upload, configuration, processing, and download workflow.",
            "Built the frontend with Next.js and backend services with NestJS.",
            "Implemented job queues, workers, and FFmpeg operations.",
            "Integrated file storage and deployed the services.",
          ],
          features: [
            {
              title: "File Uploads",
              description:
                "Video uploads to storage through signed URLs.",
            },
            {
              title: "Video Tools",
              description:
                "Video compression, format conversion, and trimming.",
            },
            {
              title: "Thumbnail Generation",
              description:
                "Image generation from video frames.",
            },
            {
              title: "Job Tracking",
              description:
                "Background processing with status updates.",
            },
            {
              title: "Result Downloads",
              description:
                "Access to generated files once processing is complete.",
            },
          ],
          technicalDecisions: [
            {
              title: "Separate API and worker",
              description:
                "The API receives requests and coordinates jobs. A dedicated worker performs video operations, keeping processing outside the HTTP request lifecycle.",
            },
            {
              title: "Queues with BullMQ and Redis",
              description:
                "BullMQ uses Redis to manage pending jobs, execution, and retries after failures.",
            },
            {
              title: "Processing with FFmpeg",
              description:
                "The worker runs FFmpeg to perform compression, trimming, format conversion, and thumbnail generation.",
            },
            {
              title: "Files and persistence",
              description:
                "Cloudflare R2 stores videos and results, with signed URLs for transfers. PostgreSQL and Prisma persist job information.",
            },
          ],
          deployment:
            "The frontend, API, worker, PostgreSQL, and Redis run as Dockerized services on a Linux VPS. The worker environment includes FFmpeg to execute processing operations.",
        },
        seo: {
          title:
            "VideoOptima | Asynchronous Video Processing — Jean Paul Flores",
          description:
            "Explore how I built VideoOptima with Next.js, NestJS, BullMQ, Redis, and FFmpeg to process videos through background jobs.",
        },
        keyWords: [
          "Asynchronous Processing",
          "Job Queues",
          "Workers",
          "Video Processing",
          "Signed URLs",
        ],
      },
    ],
  },
};
