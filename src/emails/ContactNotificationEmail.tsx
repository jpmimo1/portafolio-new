// emails/ContactNotificationEmail.tsx
import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Tailwind,
} from "@react-email/components";

type ContactNotificationEmailProps = {
  name: string;
  email: string;
  message: string;
  language: "es" | "en";
};

export function ContactNotificationEmail({
  name = "Jean Paul Flores",
  email = "paul.fa.ac@gmail.com",
  message = "Este es un nuevo mensaje",
  language = "en",
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto en el portafolio</Preview>
      <Tailwind>
        <Body className="bg-[#00a492]/10 font-sans text-gray-900">
          <Container className="mx-auto my-10 max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
            {/* Encabezado */}
            <Section>
              <Text className="text-xl font-semibold text-[#00a492]">
                📩 Nuevo mensaje desde tu portafolio
              </Text>
              <Hr className="my-4 border-t border-gray-200" />
            </Section>

            {/* Datos del usuario */}
            <Section>
              <Text className="text-base">
                <span className="font-semibold">Idiona:</span> {language}
              </Text>
              <Text className="text-base">
                <span className="font-semibold">Nombre:</span> {name}
              </Text>
              <Text className="text-base">
                <span className="font-semibold">Email:</span> {email}
              </Text>
              <Text className="text-base mt-4">
                <span className="font-semibold">Mensaje:</span>
              </Text>
              <Text className="whitespace-pre-line rounded-md bg-gray-100 p-4 text-sm text-gray-800">
                {message}
              </Text>
            </Section>

            <Hr className="my-6 border-t border-gray-200" />

            {/* Footer */}
            <Section>
              <Text className="text-xs text-gray-500">
                Este correo fue generado automáticamente desde el portafolio.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
