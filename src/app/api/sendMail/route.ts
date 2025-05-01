import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, tel, preferredContactMethods } = await request.json();

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

    return new Response(JSON.stringify({ message: "Письмо отправлено" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Ошибка отправки письма" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
