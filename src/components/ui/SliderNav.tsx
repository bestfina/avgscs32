import { twMerge } from "tailwind-merge";
import ArrowIcon from "./icon/ArrowIcon";
interface SliderNavProps {
  className?: string;
}
const SliderNav = ({ className }: SliderNavProps) => (
  <div className={twMerge("flex gap-md lg:gap-sm sm:gap-xs", className)}>
    <button aria-label="Предыдуший отзыв" className="slider-button-prev">
      <ArrowIcon className="text-TextDark rotate-90 w-10 h-10 lg:w-8 lg:h-8" />
    </button>
    <button aria-label="Следующий отзыв" className="slider-button-next">
      <ArrowIcon className="text-TextDark -rotate-90 w-10 h-10 lg:w-8 lg:h-8" />
    </button>
  </div>
);

export default SliderNav;
