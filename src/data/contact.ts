export const ContactText: { [key in TLanguages]: TContactContent } = {
  es: {
    title: "Contáctame",
    subTitle:
      "¿Tienes un proyecto en mente o quieres saber más sobre mí? Envíame un mensaje y te responderé lo antes posible.",
    form: {
      name: {
        label: "Nombre completo",
        placeholder: "Ingresa tu nombre completo",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "ejemplo@correo.com",
      },
      message: {
        label: "Mensaje",
        placeholder: "Escribe tu mensaje aquí...",
      },
      send: {
        label: "Enviar mensaje",
        placeholder: "",
      },
    },
  },
  en: {
    title: "Contact me",
    subTitle:
      "Do you have a project in mind or want to know more about me? Send me a message and I'll get back to you as soon as possible.",
    form: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
      },
      email: {
        label: "Email Address",
        placeholder: "example@email.com",
      },
      message: {
        label: "Message",
        placeholder: "Write your message here...",
      },
      send: {
        label: "Send Message",
        placeholder: "",
      },
    },
  },
};
