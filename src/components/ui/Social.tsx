import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SocialProps {
  className?: string;
}

const Social = ({ className }: SocialProps) => {
  return (
    <div className={twMerge("flex gap-xs xl:gap-xxs lg:gap-xxxs", className)}>
      <Link
        href="https://wa.me/79950203385?text=%D0%95%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%BE%20%D1%81%209%3A00%20%D0%B4%D0%BE%2019%3A00"
        className="hover:scale-90 duration-500"
        target="_blank"
      >
        <Image src="/assets/icons/whatsApp.svg" width={45} height={45} alt="whatsApp" className="xl:w-10 lg:w-9" />
      </Link>
      <Link href="https://t.me/CORTEX_DIGITAL" className="hover:scale-90 duration-500" target="_blank">
        <Image src="/assets/icons/telegram.svg" width={45} height={45} alt="telegram" className="xl:w-10 lg:w-9" />
      </Link>
    </div>
  );
};

export default Social;
