import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import ArrowIcon from "./icon/ArrowIcon";

interface SliderNavProps {
  className?: string;
}

const SliderNav = ({ className }: SliderNavProps) => {
  const t = useTranslations("slider_nav");

  return (
    <div className={twMerge("flex gap-md lg:gap-sm sm:gap-xs", className)}>
      <button aria-label={t("prev")} className="slider-button-prev">
        <ArrowIcon className="text-TextDark rotate-90 w-10 h-10 lg:w-8 lg:h-8" />
      </button>
      <button aria-label={t("next")} className="slider-button-next">
        <ArrowIcon className="text-TextDark -rotate-90 w-10 h-10 lg:w-8 lg:h-8" />
      </button>
    </div>
  );
};

export default SliderNav;