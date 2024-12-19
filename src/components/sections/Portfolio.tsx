import Button from "../ui/Button";
import Cases from "../ui/Cases";

const Portfolio = () => {
  return (
    <section id="portfolio" className=" overflow-hidden">
      <div className="container flex flex-col">
        <h2>Наши реализованные кейсы</h2>
        <Cases />
        <Button type="none" className="m-auto block underline">
          Оставьте заявку, и мы покажем ещё больше наших проектов, исходя из вашего запроса.
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
