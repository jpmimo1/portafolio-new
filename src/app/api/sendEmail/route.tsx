import { ContactConfirmationEmail } from "@/emails/ContactConfirmationEmail";
import { ContactNotificationEmail } from "@/emails/ContactNotificationEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY as string;

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  language: TLanguages;
}

const subjectsConfirmationLanguage = {
  es: "Confirmación: Mensaje recibido correctamente",
  en: "Confirmation: Your message was successfully received",
};

const subjectNotification = "📨 Nuevo mensaje desde el portafolio";

export async function POST(req: Request) {
  try {
    // Parseamos el body como JSON
    const body: ContactFormData = await req.json();

    // Validación mínima (en un caso real usarías Zod)
    if (!body.name || !body.email || !body.message || !body.language) {
      return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "contact@jeanpaulflores.com",
      to: [body.email],
      subject: `${subjectsConfirmationLanguage[body.language]}`,
      react: (
        <ContactConfirmationEmail
          language={body.language}
          userName={body.name}
        />
      ),
    });

    await resend.emails.send({
      from: "contact@jeanpaulflores.com",
      to: ["paul.fa.ac@gmail.com"],
      subject: `${subjectNotification} - ${body.name}`,
      react: (
        <ContactNotificationEmail
          language={body.language}
          email={body.email}
          message={body.message}
          name={body.name}
        />
      ),
    });

    // Respuesta
    return NextResponse.json(
      { success: true, message: "success" },
      { status: 200 }
    );
  } catch (error) {
    console.log("error api", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
