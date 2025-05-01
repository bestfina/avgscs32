import { useTranslations } from "next-intl";
import SliderNav from "../ui/SliderNav";
import FeedbackSlider from "../ui/FeedbackSlider";

const Feedback = () => {
  const t = useTranslations("main.feedback");

  return (
    <section id="feedback">
      <div className="container flex flex-col">
        <div className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-xxxs">
          <h2>{t("title")}</h2>
          <SliderNav />
        </div>
        <div>
          <FeedbackSlider />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
