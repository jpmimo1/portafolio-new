// emails/ConfirmationEmail.tsx
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const DOMAIN_URL = process.env.DOMAIN_URL as string;

const textsLanguages = {
  es: {
    preview: "✅ Tu mensaje ha sido recibido - ¡Gracias!",
    title: "¡Gracias por escribirme!",
    subtitle:
      "He recibido tu mensaje y me pondré en contacto contigo lo antes posible.",
    greeting: "Hola",
    text: "Tu mensaje se ha enviado correctamente. Lo revisaré con atención y te responderé en breve.",
    footer:
      "Este correo fue generado automáticamente desde mi portafolio personal. Si no enviaste un mensaje, puedes ignorar este correo con tranquilidad.",
  },
  en: {
    preview: "✅ Your message has been received - Thank you!",
    title: "Thank you for reaching out!",
    subtitle:
      "I’ve received your message and will get back to you as soon as possible.",
    greeting: "Hello",
    text: "Your message has been successfully delivered. I’ll review it carefully and reply shortly.",
    footer:
      "This email was automatically generated from my personal portfolio. If you didn’t send a message, please disregard this email.",
  },
};

export function ContactConfirmationEmail({
  userName = "Usuario",
  language = "en",
}: {
  userName?: string;
  language?: "es" | "en";
}) {
  const { preview, title, greeting, text, footer } = textsLanguages[language];

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="bg-[#00a492]/20 text-gray-800 font-sans">
          <Container className="mx-auto my-[40px] p-10 bg-white rounded-lg">
            {/* Header */}
            <Section>
              <Img
                src={`${DOMAIN_URL}/images/logo.png`}
                width="50"
                height="50"
                alt="Your Logo"
                className="mx-auto"
              />
            </Section>
            <Section className="text-center mt-2">
              <Text className="text-2xl font-bold text-[#00a492]">{title}</Text>

              {/* <Text className="text-gray-600 mt-2">{subtitle}</Text> */}
            </Section>

            {/* Body */}
            <Section className="mt-10">
              <Text className="text-base text-gray-700">
                {greeting} <span className="font-semibold">{userName}</span>,
              </Text>
              <Text className="text-base text-gray-700 leading-relaxed">
                {text}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="mt-[100px] border-t pt-4 text-center text-sm text-gray-500">
              <Text>{footer}</Text>
              <Text className="mt-2 mb-0">
                &copy; {new Date().getFullYear()} Jean Paul Flores
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
