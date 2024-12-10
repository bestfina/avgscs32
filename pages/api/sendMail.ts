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
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
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
