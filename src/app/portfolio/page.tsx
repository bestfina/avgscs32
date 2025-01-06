import Cases from "@/components/ui/Cases";
import { CASE_FULL } from "@/constants";

const PortfolioPage = () => {
  return (
    <section className="pt-48 pb-20 lg:pt-40 lg:pb-14 md:pt-32 md:pb-11 x:pt-28 x:pb-10">
      <div className="container flex flex-col">
        <h1>Портфолио</h1>
        <Cases caseArr={CASE_FULL} main />
      </div>
    </section>
  );
};

export default PortfolioPage;
