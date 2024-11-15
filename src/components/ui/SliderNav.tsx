import ArrowNav from "./ArrowNav";

const SliderNav = () => (
  <div className="flex gap-sm sm:gap-xxxs mt-sm sm:mt-xxxs">
    <button className="slider-button-prev">
      <ArrowNav className="text-TextLight rotate-90" />
    </button>
    <button className="slider-button-next">
      <ArrowNav className="text-TextLight -rotate-90" />
    </button>
  </div>
);

export default SliderNav;
