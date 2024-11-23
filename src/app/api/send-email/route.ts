import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // Или другой SMTP-сервис
    auth: {
      user: process.env.EMAIL_USER, // Ваш email
      pass: process.env.EMAIL_PASS, // Пароль или токен
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "tertydert@gmail.com", // Куда отправлять
    subject: "Новая заявка",
    text: `Имя: ${data.name}\nТелефон: ${data.phone}\nСообщение: ${data.details}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    } else {
      console.error("Неизвестная ошибка:", error);
    }
  }
}
