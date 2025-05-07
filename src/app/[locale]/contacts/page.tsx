import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Contact from "@/components/ui/Contact";
import Social from "@/components/ui/Social";
import Image from "next/image";

const Contacts = () => {
  const t = useTranslations("contacts");

  return (
    <section className="pt-48 pb-20 lg:pt-40 lg:pb-14 md:pt-32 md:pb-11 x:pt-28 x:pb-10 flex items-center">
      <div className="container flex items-center md:flex-col md:items-start">
        <div className="flex flex-col justify-center gap-xs lg:gap-xxs x:gap-xxxs w-2/4 md:w-full">
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
          <div>
            <div className="flex items-center font-semibold gap-xxxxs text-lg lg:text-sm md:mt-xxxs">
              <Image
                src="/assets/icons/clock-contact.svg"
                alt={t("clock_icon_alt")}
                width={18}
                height={18}
                className="lg:w-3 lg:h-3"
              />
              {t("working_hours")}
            </div>
            <Contact className="flex-col gap-xxxs my-xxxs md:my-xxxxs x:my-0s" size="x:text-lg" />
            <Social />
          </div>
          <Button type="blue" className="x:w-full">
            {t("submit_request")}
          </Button>
        </div>
        <Image
          src="/assets/images/team.webp"
          alt={t("team_image_alt")}
          width={800}
          height={400}
          priority={false}
          className="w-2/4 rounded-3xl md:w-full x:h-80 xs:h-60 object-cover"
        />
      </div>
    </section>
  );
};

export default Contacts;
