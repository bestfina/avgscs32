import Image from "next/image";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { ADVANTAGES } from "@/constants";

const About = () => (
  <section id="about" className="bg-BgDark">
    <div className="container flex flex-col gap-md">
      <h2>Немного о компании</h2>
      <div className="flex items-center gap-md">
        <div className="w-2/4 relative">
          <div className="absolute bg-BgLight w-[511px] h-[293px] flex flex-col gap-sm justify-center items-center left-[130px] top-7">
            <button>
              <Image
                src="/assets/icons/close.svg"
                alt="close"
                width={38}
                height={38}
                className="absolute top-5 right-5"
              />
            </button>
            <Logo />
            <Button type="lightBlue">Бесплатный аудит сайта</Button>
          </div>
          <Image src="/assets/images/laptop.png" width={767} height={496} alt="Ноутбук" />
        </div>
        <div className="flex flex-wrap gap-md w-2/4">
          {ADVANTAGES.map(({ id, icon, title, description }) => (
            <div className="w-[46%]" key={id}>
              <Image src={icon} width={80} height={80} alt="Иконки преимуществ" />
              <h6 className="mt-1 mb-2">{title}</h6>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
