import { useState } from "react";
import Link from "next/link";
import CustomCheckbox from "./CustomCheckbox";
import PhoneInput from "react-phone-input-2";
import { FIELDS } from "@/constants";
import { twMerge } from "tailwind-merge";

const PopupForm = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [preferredContactMethods, setPreferredContactMethods] = useState({
    telegram: false,
    whatsapp: false,
    phone: false,
    email: false,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const toggleContactMethod = (method: keyof typeof preferredContactMethods) => {
    setPreferredContactMethods(prev => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(null);
    setIsSubmitting(true); // Устанавливаем состояние "отправляется"

    const formData = {
      name,
      email,
      tel,
      preferredContactMethods,
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
        setIsFormSubmitted(false);
      }
    } catch {
      setIsFormSubmitted(false);
    } finally {
      setIsSubmitting(false); // Сбрасываем состояние после завершения запроса
    }
  };

  return (
    <div className="p-md lg:p-xs sm:p-xxs flex flex-col gap-xxxs">
      {isFormSubmitted === null ? (
        <>
          <h5>
            Менеджер свяжется с Вами
            <div>в рабочее время: Ежедневно с 9:00 до 21:00</div>
          </h5>
          <form onSubmit={handleSubmit} className="flex flex-col gap-sm lg:gap-xs mt-xxxs">
            <div className="flex gap-xs lg:gap-xxxs sm:flex-wrap">
              {FIELDS.map(({ id, type, placeholder }) => (
                <div key={id} className="w-[450px] relative flex items-center sm:w-full">
                  {id !== 2 ? (
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="input-style w-full"
                      value={id === 1 ? name : id === 3 ? email : ""}
                      onChange={e => (id === 1 ? setName(e.target.value) : id === 3 ? setEmail(e.target.value) : null)}
                    />
                  ) : (
                    <PhoneInput
                      value={tel}
                      onChange={value => setTel(value)}
                      placeholder="Телефон*"
                      specialLabel=""
                      inputProps={{
                        required: true,
                        name: "phone",
                      }}
                      containerClass="w-full"
                      inputClass="input-style w-full"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-md xl:gap-sm mt-xxxs mb-xs md:my-xxxs">
              <div className="flex flex-col gap-xxs">
                <div>Мне удобнее общаться ( по желанию ):</div>
                <div className="flex flex-wrap gap-md xl:gap-sm md:gap-xs">
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.telegram}
                    setIsAgreed={() => toggleContactMethod("telegram")}
                  >
                    <span>Telegram</span>
                  </CustomCheckbox>
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.whatsapp}
                    setIsAgreed={() => toggleContactMethod("whatsapp")}
                  >
                    <span>WhatsApp</span>
                  </CustomCheckbox>
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.phone}
                    setIsAgreed={() => toggleContactMethod("phone")}
                  >
                    <span>Звонком</span>
                  </CustomCheckbox>
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.email}
                    setIsAgreed={() => toggleContactMethod("email")}
                  >
                    <span>Почтой</span>
                  </CustomCheckbox>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-xxs">
              <button
                type="submit"
                className={twMerge(
                  "text-TextLight bg-AccentDark rounded-full font-semibold w-80 py-3 hover:opacity-80 duration-500 xl:w-72 lg:w-60 xl:py-2 x:w-full",
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                )}
                disabled={isSubmitting} // Кнопка блокируется, пока форма отправляется
              >
                {isSubmitting ? "Отправляется..." : "Отправить заявку"}
              </button>
              <p>
                Отправляя форму я соглашаюсь с правилами&nbsp;
                <Link href="/privacy" className="underline">
                  обработки данных
                </Link>
              </p>
            </div>
          </form>
        </>
      ) : isFormSubmitted ? (
        <>
          <h5 className="text-center">Спасибо{name && ", " + name}! Ваша заявка успешно отправлена.</h5>
          <p className="text-center">Наш менеджер свяжется с вами в ближайшее время</p>
          <Link
            href="/#service"
            className="m-auto mt-xs sm:mt-xxxs text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full bg-AccentDark text-center"
          >
            Смотреть все услуги
          </Link>
        </>
      ) : (
        <>
          <h5 className="text-center">Упс! Что-то пошло не так.</h5>
          <p className="text-center">
            Проверьте данные и попробуйте ещё раз. Если снова не получится, свяжитесь с нами напрямую — мы обязательно
            поможем!
          </p>
          <Link
            href="/#service"
            className="m-auto mt-xs sm:mt-xxxs text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full bg-AccentDark text-center"
          >
            Смотреть все услуги
          </Link>
        </>
      )}
    </div>
  );
};

export default PopupForm;
