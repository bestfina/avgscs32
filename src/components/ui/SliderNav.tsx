import { twMerge } from "tailwind-merge";
<<<<<<< HEAD
import ArrowIcon from "./icon/ArrowIcon";
=======
import ArrowNav from "./icon/ArrowIcon";
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
interface SliderNavProps {
  className?: string;
}
const SliderNav = ({ className }: SliderNavProps) => (
<<<<<<< HEAD
  <div className={twMerge("flex gap-md lg:gap-sm sm:gap-xs", className)}>
    <button aria-label="Предыдуший отзыв" className="slider-button-prev">
      <ArrowIcon className="text-TextDark rotate-90 w-10 h-10 lg:w-8 lg:h-8" />
    </button>
    <button aria-label="Следующий отзыв" className="slider-button-next">
      <ArrowIcon className="text-TextDark -rotate-90 w-10 h-10 lg:w-8 lg:h-8" />
=======
  <div className={twMerge("flex gap-sm lg:gap-xxs sm:gap-xxxs", className)}>
    <button className="slider-button-prev" aria-label="Previous Slide">
      <ArrowNav className="text-TextLight rotate-90" />
    </button>
    <button className="slider-button-next" aria-label="Next Slide">
      <ArrowNav className="text-TextLight -rotate-90" />
>>>>>>> 6615dc08a92a2914ac62c6439352fc5dd202defc
    </button>
  </div>
);

export default SliderNav;
