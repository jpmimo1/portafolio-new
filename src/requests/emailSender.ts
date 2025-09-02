type TEmailData = {
  name: string;
  email: string;
  message: string;
  language: string;
};

export const sendEmail = async (emailData: TEmailData) => {
  const response = await fetch("/api/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  });

  if (response.status !== 200) {
    throw "Error sending message";
  }

  await response.json();
};
