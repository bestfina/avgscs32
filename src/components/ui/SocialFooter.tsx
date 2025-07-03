import Link from "next/link";
import { twMerge } from "tailwind-merge";

import TGIcon from "public/assets/icons/tg-icon.svg";
import WAIcon from "public/assets/icons/wa-icon.svg";
import { SocialLinks } from "@/constants";

interface SocialProps {
  className?: string;
}

const SocialFooter = ({ className }: SocialProps) => {
  return (
    <div className={twMerge("flex gap-[10px] xl:gap-xxs lg:gap-xxxs", className)}>
      <Link
        href={SocialLinks.TELEGRAM}
        className="hover:scale-90 duration-500 w-[48px] h-[48px] flex justify-center items-center"
        target="_blank"
      >
        <TGIcon />
      </Link>
      <Link href={SocialLinks.WHATSAPP} className="hover:scale-90 duration-500 w-[48px] h-[48px] flex justify-center items-center" target="_blank">
        <WAIcon />
      </Link>
      {/* <Link href={SocialLinks.VK} className="hover:scale-90 duration-500" target="_blank">
        <Image src="/assets/icons/vk.svg" width={50} height={50} alt="vk" className="xl:w-10 lg:w-9 sm:w-8 xs:w-7" />
      </Link>
      <Link href={SocialLinks.YOUTUBE} className="hover:scale-90 duration-500" target="_blank">
        <Image
          src="/assets/icons/youtube.svg"
          width={50}
          height={50}
          alt="youtube"
          className="xl:w-10 lg:w-9 sm:w-8 xs:w-7"
        />
      </Link> */}
    </div>
  );
};

export default SocialFooter;
