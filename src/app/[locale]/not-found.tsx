import { TransitionLink } from "@/lib/link";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("main.not_found");

  return (
    <section className="h-[80vh] px-xs flex flex-col items-center justify-center gap-xs">
      <div className="text-center">
        <div className="font-bold text-6xl text-center">404</div> {t("description")}
      </div>
      <Link href="/" className="underline">
        {t("back_to_main")}
      </Link>
    </section>
  );
};

export default NotFound;