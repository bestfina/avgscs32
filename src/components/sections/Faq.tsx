import Questions from "../ui/Questions";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container flex flex-col gap-md lg:gap-xs">
        <h2>Ответы на частые вопросы</h2>
        <Questions />
      </div>
    </section>
  );
};

export default Faq;
