import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не поддерживается" });
  }

  const { name, email, tel, isAgreed } = req.body;

  try {
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
      from: `"Cortex Digital" <your-email@domain.com>`, // Отправитель
      to: "info@cortexdigital.net", // Получатель
      subject: "Новая заявка с сайта", // Тема письма
      text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${tel}\nСоглашение: ${isAgreed}`, // Текст письма
    });

    return res.status(200).json({ message: "Письмо отправлено" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Ошибка отправки письма" });
  }
};

export default handler;
