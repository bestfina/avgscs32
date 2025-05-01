import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface SocialProps {
  className?: string;
}

const Social = ({ className }: SocialProps) => {
  return (
    <div className={twMerge("flex gap-xs xl:gap-xxs lg:gap-xxxs", className)}>
      <a href="https://wa.me/79950203385" className="hover:scale-90 duration-500" target="_blank">
        <Image
          src="/assets/icons/whatsApp.svg"
          width={50}
          height={50}
          alt="whatsApp"
          className="xl:w-10 lg:w-9 xs:w-7"
        />
      </a>
      <a href="https://t.me/CORTEX_DIGITAL" className="hover:scale-90 duration-500" target="_blank">
        <Image
          src="/assets/icons/telegram.svg"
          width={50}
          height={50}
          alt="telegram"
          className="xl:w-10 lg:w-9 xs:w-7"
        />
      </a>
    </div>
  );
};

export default Social;
