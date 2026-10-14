export const ExperienceText: { [key in TLanguages]: TExperience } = {
  es: {
    title: "Experiencia laboral",
    subTitle:
      "Experiencia desarrollando aplicaciones web, herramientas de gestión y soluciones para distintos sectores.",
    history: [
      {
        company: "TREMGroup",
        modality: "remote",
        position: "Desarrollador Front-End",
        startDate: "2023-01-01",
        endDate: "",
        responsibilities: [
          "Desarrollé <strong>herramientas de edición visual y un constructor drag-and-drop</strong> para un CMS inmobiliario utilizado por clientes en Estados Unidos.",
          "Lideré la <strong>adopción progresiva de TypeScript</strong> en un código base de React y Redux, y participé en la migración de React 16 a React 18.",
          "Desarrollé <strong>componentes reutilizables y nuevas funcionalidades con React y Next.js</strong>, contribuyendo a la modernización de la plataforma.",
          "Utilicé <strong>Sentry para investigar y resolver errores</strong>, y participé en la validación de cambios y despliegues en entornos de desarrollo y producción.",
        ],
      },
      {
        company: "Valtec Consultores",
        modality: "remote",
        position: "Desarrollador Full-Stack",
        startDate: "2022-01-01",
        endDate: "2023-08-01",
        responsibilities: [
          "Desarrollé y mantuve aplicaciones empresariales con <strong>React, .NET, SQL Server y Oracle</strong>, trabajando tanto en frontend como en backend.",
          "Incorporé <strong>interfaces interactivas e integraciones</strong> en sistemas empresariales existentes, adaptando tecnologías frontend modernas a aplicaciones legacy.",
          "Contribuí a una <strong>plataforma de monitoreo IoT en Google Cloud</strong>, integrando datos de sensores y visualizaciones en tiempo real.",
        ],
      },
      {
        company: "Killa House Hotel",
        modality: "onsite",
        position: "Desarrollador Front-End",
        startDate: "2016-07-01",
        endDate: "2017-07-01",
        responsibilities: [
          "Rediseñé y modernicé el <strong>sitio web de la empresa</strong>, mejorando su navegación y presentación.",
          "Desarrollé una <strong>solución de gestión de reservas</strong> y automaticé comunicaciones por correo electrónico para facilitar el seguimiento de las solicitudes.",
        ],
      },
      {
        company: "Llika Inversiones",
        modality: "onsite",
        position: "Desarrollador Front-End",
        startDate: "2015-06-01",
        endDate: "2016-06-01",
        responsibilities: [
          "Desarrollé <strong>soluciones web y plugins de reservas</strong> para clientes comerciales, incluyendo la gestión de horarios de visita a Machu Picchu.",
          "Creé y mantuve <strong>temas personalizados en Drupal</strong>, adaptados a las necesidades de cada cliente.",
        ],
      },
    ],
  },
  en: {
    title: "Professional Experience",
    subTitle:
      "Experience building web applications, management tools, and solutions across different industries.",
    history: [
      {
        company: "TREMGroup",
        modality: "remote",
        position: "Front-End Developer",
        startDate: "2023-01-01",
        endDate: "",
        responsibilities: [
          "Developed <strong>visual editing tools and a drag-and-drop page builder</strong> for a real estate CMS used by clients across the United States.",
          "Led the <strong>progressive adoption of TypeScript</strong> in a React and Redux codebase and contributed to the migration from React 16 to React 18.",
          "Built <strong>reusable components and new features with React and Next.js</strong>, contributing to the platform’s modernization.",
          "Used <strong>Sentry to investigate and resolve errors</strong> and participated in validating changes and deployments across development and production environments.",
        ],
      },
      {
        company: "Valtec Consultores",
        modality: "remote",
        position: "Full-Stack Developer",
        startDate: "2022-01-01",
        endDate: "2023-08-01",
        responsibilities: [
          "Developed and maintained business applications with <strong>React, .NET, SQL Server, and Oracle</strong>, working across both frontend and backend.",
          "Added <strong>interactive interfaces and integrations</strong> to existing enterprise systems, introducing modern frontend technologies into legacy applications.",
          "Contributed to an <strong>IoT monitoring platform on Google Cloud</strong>, integrating sensor data and real-time visualizations.",
        ],
      },
      {
        company: "Killa House Hotel",
        modality: "onsite",
        position: "Front-End Developer",
        startDate: "2016-07-01",
        endDate: "2017-07-01",
        responsibilities: [
          "Redesigned and modernized the <strong>company website</strong>, improving its navigation and presentation.",
          "Developed a <strong>reservation management solution</strong> and automated email communications to support booking follow-ups.",
        ],
      },
      {
        company: "Llika Inversiones",
        modality: "onsite",
        position: "Front-End Developer",
        startDate: "2015-06-01",
        endDate: "2016-06-01",
        responsibilities: [
          "Developed <strong>custom web solutions and booking plugins</strong> for business clients, including visitor time-slot management for Machu Picchu.",
          "Created and maintained <strong>custom Drupal themes</strong>, tailored to each client’s needs.",
        ],
      },
    ],
  },
};

export const presentLabel: { [key in TLanguages]: string } = {
  es: "Actualidad",
  en: "Present",
};

export const modalityLabels: Record<TLanguages, Record<TWorkModality, string>> = {
  es: {
    remote: "Remoto",
    onsite: "Presencial",
    hybrid: "Híbrido",
    "": "",
  },
  en: {
    remote: "Remote",
    onsite: "On-site",
    hybrid: "Hybrid",
    "": "",
  },
};
