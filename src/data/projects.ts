export const ProjectsText: { [key in TLanguages]: TProjectsContent } = {
  es: {
    title: "Mis Proyectos",
    subTitle:
      "Aquí encontrarás algunos de los proyectos que he desarrollado, utilizando tecnologías modernas y buenas prácticas de desarrollo.",
    projects: [
      {
        id: "1",
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
