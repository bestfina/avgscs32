import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SocialProps {
  className?: string;
}

const Social = ({ className }: SocialProps) => {
  return (
    <div className={twMerge("flex gap-xs xl:gap-xxs", className)}>
      <Link href="https://wa.me/79950203385" target="_blank">
        <Image src="/assets/icons/whatsApp.svg" width={45} height={45} alt="whatsApp" className="xl:w-10 lg:w-9" />
      </Link>
      <Link href="https://t.me/CORTEX_DIGITAL" target="_blank">
        <Image src="/assets/icons/telegram.svg" width={45} height={45} alt="telegram" className="xl:w-10 lg:w-9" />
      </Link>
    </div>
  );
};

export default Social;
