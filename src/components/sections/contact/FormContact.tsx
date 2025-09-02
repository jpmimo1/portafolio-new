"use client";

import { ContactText } from "@/data/contact";
import { addToast, Button, Input, Textarea } from "@heroui/react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { MdMail } from "react-icons/md";
import {} from "@hookform/resolvers";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/requests/emailSender";

const emailsMessages: {
  [key in TLanguages]: { error: string; success: string };
} = {
  es: {
    error: "Lo sentimos, ocurrió un error al enviar tu mensaje.",
    success: "Tu mensaje se envió correctamente.",
  },
  en: {
    error: "Sorry, something went wrong while sending your message.",
    success: "Your message has been sent successfully.",
  },
};

export const errorsTranslations: {
  [key in TLanguages]: { [keyError: string]: string };
} = {
  es: {
    name_required: "El nombre es obligatorio",
    email_invalid: "El correo electrónico no es válido",
    email_required: "El correo electrónico es obligatorio",
    subject_required: "El asunto es obligatorio",
    message_required: "El mensaje es obligatorio",
  },
  en: {
    name_required: "Name is required",
    email_invalid: "Invalid email address",
    email_required: "Email is required",
    subject_required: "Subject is required",
    message_required: "Message is required",
  },
};

type TProps = {
  language: TLanguages;
};

const getContactSchema = (language: TLanguages) => {
  const errorsMessages = errorsTranslations[language];

  const { name_required, email_invalid, email_required, message_required } =
    errorsMessages;

  return z.object({
    name: z.string().min(1, name_required),
    email: z.email(email_invalid).min(1, email_required),
    message: z.string().min(1, message_required),
  });
};

type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

export const FormContact = ({ language }: TProps) => {
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(getContactSchema(language)) });

  const { form } = useMemo(() => {
    return ContactText[language];
  }, [language]);

  const onSubmit = async (data: ContactFormData) => {
    const { success, error } = emailsMessages[language];
    try {
      setLoading(true);
      await sendEmail({ ...data, language });
      addToast({
        title: success,
        color: "success",
      });
      reset();
    } catch (ex) {
      console.error(ex);
      addToast({
        title: error,
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  const { name, email, message, send } = form;
  return (
    <form
      className="max-w-[650px] w-full lg:w-[550px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <Input
          type="text"
          label={name.label}
          placeholder={name.placeholder}
          variant="faded"
          color="primary"
          labelPlacement="outside-top"
          size="lg"
          className="mb-4"
          radius="sm"
          {...register("name")}
          errorMessage={errors.name?.message}
          isInvalid={!!errors.name}
        />
        <Input
          type="email"
          label={email.label}
          placeholder={email.placeholder}
          variant="faded"
          color="primary"
          labelPlacement="outside-top"
          size="lg"
          className="mb-4"
          radius="sm"
          {...register("email")}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
        />
        <Textarea
          label={message.label}
          placeholder={message.placeholder}
          variant="faded"
          color="primary"
          labelPlacement="outside-top"
          size="lg"
          className="mb-4"
          classNames={{ inputWrapper: "py-2" }}
          minRows={5}
          radius="sm"
          {...register("message")}
          errorMessage={errors.message?.message}
          isInvalid={!!errors.message}
        />
      </div>
      <Button
        type="submit"
        color="primary"
        size="lg"
        className="w-full"
        radius="sm"
        startContent={<MdMail size={20} />}
        isLoading={isSubmitting || loading}
      >
        {send.label}
      </Button>
    </form>
  );
};
