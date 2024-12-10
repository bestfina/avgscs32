"use client";
import Image from "next/image";
import InputMask from "react-input-mask";
import { FIELDS } from "@/constants";
import CustomCheckbox from "./CustomCheckbox";
import { useState } from "react";
import Link from "next/link";

const PopupForm = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      tel,
      isAgreed,
    };

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        // const data = await response.json();
        setIsFormSubmitted(false);
      }
    } catch {
      setIsFormSubmitted(false);
    }
  };

  return (
    <div className="p-md lg:p-xs sm:p-xxs flex flex-col gap-xxxs">
      {isFormSubmitted === null ? (
        <>
          <h5>
            Менеджер свяжется с Вами
            <div>в рабочее время: Ежедневно с 8:00 до 22:00</div>
          </h5>
          <form onSubmit={handleSubmit} className="flex flex-col gap-sm lg:gap-xs mt-xxxs">
            <div className="flex gap-xxxs sm:flex-wrap">
              {FIELDS.map(({ id, type, placeholder, icon }) => (
                <div key={id} className="w-1/3 relative flex items-center sm:w-full">
                  <Image src={icon} width={20} height={20} alt="иконка" loading="lazy" className="absolute ml-4" />
                  {id !== 2 ? (
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="input-style w-full"
                      value={id === 1 ? name : id === 3 ? email : ""}
                      onChange={e => (id === 1 ? setName(e.target.value) : id === 3 ? setEmail(e.target.value) : null)}
                    />
                  ) : (
                    <InputMask
                      mask="+7 (999) 999-99-99"
                      placeholder={placeholder}
                      className="input-style w-full"
                      value={tel}
                      onChange={e => setTel(e.target.value)}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
            {/* <div className="flex gap-md xl:gap-sm">
          <div className="flex flex-col gap-xxxs">
            <div>Мне удобнее общаться:</div>
            <div className="flex flex-wrap gap-md">
              <CustomCheckbox isAgreed={isMessengerT} setIsAgreed={setMessengerT}>
                <Image src="/assets/icons/telegram.svg" width={40} height={40} loading="lazy" alt="телеграм" />
                <span>Telegram</span>
              </CustomCheckbox>
              <CustomCheckbox isAgreed={isMessengerW} setIsAgreed={setMessengerW}>
                <Image src="/assets/icons/whatsApp.svg" width={40} height={40} loading="lazy" alt="вацап" />
                <span>WhatsApp</span>
              </CustomCheckbox>
              <CustomCheckbox isAgreed={isMessengerP} setIsAgreed={setMessengerP}>
                <Image src="/assets/icons/phone.svg" width={40} height={40} loading="lazy" alt="телефон" />
                <span>Звонком</span>
              </CustomCheckbox>
              <CustomCheckbox isAgreed={isMessengerE} setIsAgreed={setMessengerE}>
                <Image src="/assets/icons/email.svg" width={40} height={40} loading="lazy" alt="почта" />
                <span>Почтой</span>
              </CustomCheckbox>
            </div>
          </div>
        </div> */}
            <div className="flex flex-col gap-xxs">
              <button
                type="submit"
                className="text-TextLight bg-AccentDark rounded-full font-semibold w-80 py-3 
          hover:opacity-80 duration-500 xl:w-72 lg:w-60 xl:py-2"
              >
                Отправить заявку
              </button>
              <CustomCheckbox isAgreed={isAgreed} setIsAgreed={setIsAgreed}>
                <p>
                  Соглашаюсь с правилами&nbsp;
                  <Link href="/privacy">обработки данных</Link>
                </p>
              </CustomCheckbox>
            </div>
          </form>
        </>
      ) : isFormSubmitted ? (
        <>
          <h5 className="text-center">Спасибо{name && ", " + name}! Ваша заявка успешно отправлена.</h5>
          <p className="text-center">Наш менеджер свяжется с вами в ближайшее время</p>
        </>
      ) : !isFormSubmitted ? (
        <>
          <h5 className="text-center">Упс! Что-то пошло не так.</h5>
          <p className="text-center">
            Проверьте данные и попробуйте ещё раз. Если снова не получится, напишите нам напрямую — мы обязательно
            поможем!
          </p>
        </>
      ) : null}
    </div>
  );
};

export default PopupForm;
