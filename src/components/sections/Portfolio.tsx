import { CASE_MAIN } from "@/constants";
import Cases from "../ui/Cases";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container flex flex-col">
        <h2>Проекты, которыми мы гордимся</h2>
        <Cases caseArr={CASE_MAIN} />
      </div>
    </section>
  );
};

export default Portfolio;
