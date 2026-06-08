export const ExperienceText: { [key in TLanguages]: TExperience } = {
  es: {
    title: "Experiencia Laboral",
    subTitle:
      "A lo largo de mi trayectoria he tenido la oportunidad de trabajar en proyectos diversos que me han permitido crecer como desarrollador y profesional.",
    history: [
      {
        company: "TREMGroup",
        position: "Desarrollador Front-End",
        startDate: "2023-01-01",
        endDate: "",
        responsibilities: [
          "Diseñé e implementé un <strong>sistema de edición visual contextual</strong> para el CMS inmobiliario (IDX Boost), desarrollando componentes reutilizables como <i>SelectableItem</i> y <i>ModalEditor</i> para unificar flujos de trabajo.",
          "Lideré la adopción progresiva de <strong>TypeScript</strong> en un código base legacy extenso de React y Redux, mejorando la robustez del código y la experiencia del desarrollador.",
          "Participé activamente en la <strong>migración de React 16 a React 18</strong>, actualizando dependencias críticas, reemplazando bibliotecas obsoletas y resolviendo conflictos de compatibilidad.",
          "Desarrollé un <strong>constructor visual basado en cuadrículas (grid)</strong> con capacidades drag-and-drop, otorgando flexibilidad total en la creación de páginas y reduciendo la dependencia de layouts rígidos.",
          "Implementé interfaces avanzadas de gestión en el producto, como el módulo para la administración y asignación de <i>tripwires</i> a sitios web específicos.",
        ],
      },
      {
        company: "Valtec Consultores",
        position: "Desarrollador Full-Stack",
        startDate: "2022-01-01",
        endDate: "2023-08-01",
        responsibilities: [
          "Desarrollé y mantuve aplicaciones empresariales utilizando <strong>React, .NET, SQL Server y Oracle</strong>, implementando nuevas características e integraciones en arquitecturas complejas.",
          "Diseñé e implementé interfaces de usuario altamente interactivas introduciendo tecnologías frontend modernas dentro de sistemas empresariales legacy.",
          "Contribuí al desarrollo y despliegue de una <strong>plataforma de monitoreo IoT en Google Cloud</strong>, integrando pipelines de datos de sensores en tiempo real mediante Pub/Sub, Cloud Functions, Firestore y Cloud Run.",
        ],
      },
      {
        company: "Killa House Hotel",
        position: "Desarrollador Front-End",
        startDate: "2016-07-01",
        endDate: "2017-07-01",
        responsibilities: [
          "Rediseñé y modernicé por completo el sitio web de la empresa, mejorando significativamente la <strong>experiencia del usuario (UX) y el rendimiento</strong> de carga.",
          "Desarrollé una <strong>solución personalizada de gestión de reservas</strong> mediante un plugin a medida, optimizando el procesamiento y flujo de solicitudes en línea.",
          "Implementé un sistema automatizado de comunicación por correo electrónico para agilizar el contacto con los clientes y mejorar el seguimiento de las reservas.",
          "Optimicé herramientas internas basadas en <strong>Excel</strong>, programando nuevas funcionalidades para llevar un control estructurado de los pagos y consumos de los huéspedes.",
        ],
      },
      {
        company: "Llika Inversiones",
        position: "Desarrollador Front-End",
        startDate: "2015-06-01",
        endDate: "2016-06-01",
        responsibilities: [
          "Diseñé e implementé un <strong>plugin de reservas especializado</strong> para la gestión y control de horarios de visita al <strong>Santuario de Machu Picchu</strong>.",
          "Creé y mantuve más de <strong>10 temas personalizados en Drupal</strong>, aplicando optimizaciones estrictas de usabilidad y velocidad de entrega web.",
          "Desarrollé soluciones web a medida y componentes interactivos orientados a reservas para diversos clientes comerciales.",
        ],
      },
    ],
  },
  en: {
    title: "Work Experience",
    subTitle:
      "Throughout my career, I've had the chance to work on diverse projects that shaped my skills and growth as a developer.",
    history: [
      {
        company: "TREMGroup",
        position: "Front-End Developer",
        startDate: "2023-01-01",
        endDate: "",
        responsibilities: [
          "Designed and implemented a <strong>contextual visual editing system</strong> for the real estate CMS (IDX Boost), building reusable components like <i>SelectableItem</i> and <i>ModalEditor</i> to unify complex workflows.",
          "Led the progressive adoption of <strong>TypeScript</strong> within a large legacy React and Redux codebase, enhancing code reliability and overall developer experience.",
          "Actively participated in the <strong>migration from React 16 to React 18</strong>, modernizing critical dependencies, replacing deprecated libraries, and resolving compatibility challenges.",
          "Developed a <strong>grid-based visual builder</strong> with drag-and-drop capabilities, delivering high page-creation flexibility and reducing dependency on rigid predefined layouts.",
          "Built advanced administration interfaces, including the dedicated module for managing and assigning <i>tripwires</i> to specific client websites.",
        ],
      },
      {
        company: "Valtec Consultores",
        position: "Full-Stack Developer",
        startDate: "2022-01-01",
        endDate: "2023-08-01",
        responsibilities: [
          "Developed and maintained enterprise applications using <strong>React, .NET, SQL Server, and Oracle</strong>, implementing new features and integrations across complex architectures.",
          "Designed and implemented highly interactive user interfaces by introducing modern frontend technologies into legacy enterprise systems.",
          "Contributed to the development and cloud deployment of an <strong>IoT monitoring platform on Google Cloud</strong>, integrating real-time sensor data pipelines using Pub/Sub, Cloud Functions, Firestore, and Cloud Run.",
        ],
      },
      {
        company: "Killa House Hotel",
        position: "Front-End Developer",
        startDate: "2016-07-01",
        endDate: "2017-07-01",
        responsibilities: [
          "Completely redesigned and modernized the company website, significantly improving <strong>user experience (UX) and loading performance</strong>.",
          "Developed a <strong>custom reservation management solution</strong> via a tailored plugin, streamlining online booking request workflows.",
          "Implemented an automated email communication system to streamline client interaction and enhance booking follow-ups.",
          "Optimized internal <strong>Excel-based tools</strong>, adding advanced features to maintain a structured log of guest payments and in-house purchases.",
        ],
      },
      {
        company: "Llika Inversiones",
        position: "Front-End Developer",
        startDate: "2015-06-01",
        endDate: "2016-06-01",
        responsibilities: [
          "Designed and implemented a <strong>specialized reservation plugin</strong> to manage and control visiting schedules for the <strong>Machu Picchu Sanctuary</strong>.",
          "Created and maintained over <strong>10 custom Drupal themes</strong>, focusing heavily on page speed, usability, and web performance optimization.",
          "Developed custom web solutions and booking-related plugins tailored to the specific business needs of commercial clients.",
        ],
      },
    ],
  },
};

export const presentLabel: { [key in TLanguages]: string } = {
  es: "Actualidad",
  en: "Present",
};
