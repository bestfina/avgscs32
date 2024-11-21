import { twMerge } from "tailwind-merge";
import ArrowNav from "./icon/ArrowIcon";
interface SliderNavProps {
  className?: string;
}
const SliderNav = ({ className }: SliderNavProps) => (
  <div className={twMerge("flex gap-sm sm:gap-xxxs", className)}>
    <button className="slider-button-prev" aria-label="Previous Slide">
      <ArrowNav className="text-TextLight rotate-90" />
    </button>
    <button className="slider-button-next" aria-label="Next Slide">
      <ArrowNav className="text-TextLight -rotate-90" />
    </button>
  </div>
);

export default SliderNav;
