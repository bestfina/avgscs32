import { CASE } from "@/constants";
import Cases from "../ui/Cases";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container flex flex-col">
        <h2>Проекты, которыми мы гордимся</h2>
        <Cases caseArr={CASE.slice(0, 3)} />
      </div>
    </section>
  );
};

export default Portfolio;
