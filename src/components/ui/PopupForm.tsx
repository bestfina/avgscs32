import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import CustomCheckbox from "./CustomCheckbox";
import PhoneInput from "react-phone-input-2";
import { FIELDS } from "@/constants";
import { twMerge } from "tailwind-merge";

const PopupForm = () => {
  const t = useTranslations();
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
    setIsSubmitting(true);

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
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-md lg:p-xs sm:p-xxs flex flex-col gap-xxxs">
      {isFormSubmitted === null ? (
        <>
          <h5>
            {t("popup_form.title")}
            <div>{t("popup_form.working_hours")}</div>
          </h5>
          <form onSubmit={handleSubmit} className="flex flex-col gap-sm lg:gap-xs mt-xxxs">
            <div className="flex gap-xs lg:gap-xxxs sm:flex-wrap">
              {FIELDS.map(({ id, type , placeholder}) => (
                <div key={id} className="w-[450px] relative flex items-center sm:w-full">
                  {id !== 2 ? (
                    <input
                      type={type}
                      placeholder={t(placeholder)}
                      className="input-style w-full"
                      value={id === 1 ? name : id === 3 ? email : ""}
                      onChange={e => (id === 1 ? setName(e.target.value) : id === 3 ? setEmail(e.target.value) : null)}
                    />
                  ) : (
                    <PhoneInput
                      value={tel}
                      onChange={value => setTel(value)}
                      placeholder={t("popup_form.fields.phone_placeholder")}
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
                <div>{t("popup_form.contact_methods.label")}</div>
                <div className="flex flex-wrap gap-md xl:gap-sm md:gap-xs">
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.telegram}
                    setIsAgreed={() => toggleContactMethod("telegram")}
                  >
                    <span>{t("popup_form.contact_methods.telegram")}</span>
                  </CustomCheckbox>
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.whatsapp}
                    setIsAgreed={() => toggleContactMethod("whatsapp")}
                  >
                    <span>{t("popup_form.contact_methods.whatsapp")}</span>
                  </CustomCheckbox>
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.phone}
                    setIsAgreed={() => toggleContactMethod("phone")}
                  >
                    <span>{t("popup_form.contact_methods.phone")}</span>
                  </CustomCheckbox>
                  <CustomCheckbox
                    isAgreed={preferredContactMethods.email}
                    setIsAgreed={() => toggleContactMethod("email")}
                  >
                    <span>{t("popup_form.contact_methods.email")}</span>
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
                disabled={isSubmitting}
              >
                {isSubmitting ? t("popup_form.submitting") : t("popup_form.submit_button")}
              </button>
              <p dangerouslySetInnerHTML={{ __html: t.raw("popup_form.privacy_agreement") }} />
            </div>
          </form>
        </>
      ) : isFormSubmitted ? (
        <>
          <h5 className="text-center">{t("popup_form.success.title", { name: name && ", " + name })}</h5>
          <p className="text-center">{t("popup_form.success.description")}</p>
          <Link
            href="/#service"
            className="m-auto mt-xs sm:mt-xxxs text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full bg-AccentDark text-center"
          >
            {t("popup_form.success.view_services")}
          </Link>
        </>
      ) : (
        <>
          <h5 className="text-center">{t("popup_form.error.title")}</h5>
          <p className="text-center">{t("popup_form.error.description")}</p>
          <Link
            href="/#service"
            className="m-auto mt-xs sm:mt-xxxs text-TextLight rounded-full font-bold w-80 py-3 hover:opacity-70 duration-500 xl:w-72 lg:w-60 md:w-56 xl:py-2 x:w-full bg-AccentDark text-center"
          >
            {t("popup_form.error.view_services")}
          </Link>
        </>
      )}
    </div>
  );
};

export default PopupForm;