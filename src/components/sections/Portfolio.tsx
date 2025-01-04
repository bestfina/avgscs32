import Cases from "../ui/Cases";

const Portfolio = () => {
  return (
    <section id="portfolio" className=" overflow-hidden">
      <div className="container flex flex-col">
        <h2>Проекты, которыми мы гордимся</h2>
        <Cases />
      </div>
    </section>
  );
};

export default Portfolio;
