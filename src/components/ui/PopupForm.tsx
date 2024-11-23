"use client";
import Image from "next/image";
import InputMask from "react-input-mask";
import { FIELDS } from "@/constants";
import CustomCheckbox from "./CustomCheckbox";
import { useState } from "react";
import Link from "next/link";

const PopupForm = () => {
  const [isAgreed, setIsAgreed] = useState(true);
  const [isMessengerT, setMessengerT] = useState(false);
  const [isMessengerW, setMessengerW] = useState(false);
  const [isMessengerP, setMessengerP] = useState(false);
  const [isMessengerE, setMessengerE] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      alert("Пожалуйста, согласитесь с правилами обработки данных.");
      return;
    }

    const formData = {
      name: "Имя пользователя", // Подставьте реальные данные
      phone: "+7 (999) 999-99-99", // Пример номера
      details: "Сообщение пользователя", // Пример сообщения
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Заявка успешно отправлена!");
      } else {
        alert("Ошибка при отправке заявки: " + result.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Произошла ошибка: " + error.message);
      } else {
        console.error("Неизвестная ошибка:", error);
      }
    }
  };

  return (
    <div className="p-md flex flex-col gap-sm">
      <h5>
        Менеджер свяжется с Вами
        <div>в рабочее время: Ежедневно с 9:00 до 19:00</div>
      </h5>
      <form onSubmit={handleSubmit} className="flex flex-col gap-sm">
        <div className="flex gap-sm">
          {FIELDS.map(({ id, type, placeholder, icon }) => (
            <div key={id} className="w-1/3 relative flex items-center">
              <Image src={icon} width={20} height={20} alt="иконка" className="absolute ml-6" />
              {id !== 2 ? (
                <input type={type} placeholder={placeholder} className="input-style w-full" />
              ) : (
                <InputMask
                  mask="+7 (999) 999-99-99"
                  placeholder={placeholder}
                  className="input-style w-full"
                  required
                />
              )}
            </div>
          ))}
        </div>
        <div>
          Дополнительная информация <b>( По желанию )</b>:
        </div>
        <div className="flex gap-md">
          <textarea
            name="details"
            placeholder="Опишите подробности"
            className="input-style mb-sm w-2/4 h-44"
          ></textarea>
          <div className="w-2/4 flex flex-col gap-sm">
            <div>Мне удобнее общаться:</div>
            <div className="flex flex-wrap gap-md">
              <CustomCheckbox isAgreed={isMessengerT} setIsAgreed={setMessengerT}>
                <Image src="/assets/icons/telegram.svg" width={40} height={40} alt="" />
                <span>Telegram</span>
              </CustomCheckbox>
              <CustomCheckbox isAgreed={isMessengerW} setIsAgreed={setMessengerW}>
                <Image src="/assets/icons/whatsApp.svg" width={40} height={40} alt="" />
                <span>WhatsApp</span>
              </CustomCheckbox>
              <CustomCheckbox isAgreed={isMessengerP} setIsAgreed={setMessengerP}>
                <Image src="/assets/icons/phone.svg" width={40} height={40} alt="" />
                <span>Звонком</span>
              </CustomCheckbox>
              <CustomCheckbox isAgreed={isMessengerE} setIsAgreed={setMessengerE}>
                <Image src="/assets/icons/email.svg" width={40} height={40} alt="" />
                <span>Почтой</span>
              </CustomCheckbox>
            </div>
          </div>
        </div>
        <CustomCheckbox isAgreed={isAgreed} setIsAgreed={setIsAgreed}>
          <p>
            Соглашаюсь с правилами&nbsp;
            <Link href="/privacy">обработки данных</Link>
          </p>
        </CustomCheckbox>
        <button
          type="submit"
          className="text-TextLight bg-AccentDark rounded-full font-semibold w-80 py-3 
          hover:opacity-80 duration-500 xl:w-72 lg:w-60 xl:py-2"
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default PopupForm;
