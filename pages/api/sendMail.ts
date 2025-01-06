import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не поддерживается" });
  }

  const { name, email, tel, preferredContactMethods } = req.body;

  try {
    // Преобразуем preferredContactMethods в читаемый список

    const contactMethods =
      preferredContactMethods && typeof preferredContactMethods === "object"
        ? Object.entries(preferredContactMethods)
            .filter(([, value]) => value)
            .map(([key]) => key) // Берем только ключи
            .join(", ") || "Не указаны" // Преобразуем в строку или указываем "Не указаны", если пусто
        : "Не указаны";

    // Настройка SMTP-транспорта
    const transporter = nodemailer.createTransport({
      host: "sm26.hosting.reg.ru",
      port: 465,
      secure: true,
      auth: {
        user: "info@cortexdigital.net",
        pass: "yM0jL3tP2zlU3jV5",
      },
    });

    // Отправка письма
    await transporter.sendMail({
      from: `"Cortex Digital" <info@cortexdigital.net>`, // Отправитель
      to: "info@cortexdigital.net", // Получатель
      subject: "Новая заявка с сайта", // Тема письма
      text: `
        Имя: ${name || "Не указано"}
        Email: ${email || "Не указан"}
        Телефон: ${tel || "Не указан"}
        Способы связи: ${contactMethods}
      `,
    });

    return res.status(200).json({ message: "Письмо отправлено" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Ошибка отправки письма" });
  }
};

export default handler;
