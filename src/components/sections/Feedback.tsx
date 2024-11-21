import SliderNav from "../ui/SliderNav";
import FeedbackSlider from "../ui/FeedbackSlider";

const Feedback = () => (
  <section id="feedback">
    <div className="container flex flex-col gap-md">
      <div className="flex justify-between items-center sm:flex-col sm:justify-start sm:items-start">
        <h2>Настоящие отзывы от клиетов</h2>
        <SliderNav />
      </div>
      <div>
        <FeedbackSlider />
      </div>
    </div>
  </section>
);

export default Feedback;
