import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { FOOTER_SOCIAL_LINKS } from "@/constants";

interface SocialProps {
  className?: string;
}

const SocialFooter = ({ className }: SocialProps) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      {FOOTER_SOCIAL_LINKS.map(({ icon: Icon, link }) => (
        <Link
          href={link}
          className="bg-[#035AA6] w-[48px] h-[48px] rounded-lg flex items-center justify-center hover:opacity-[0.7] transition-opactiy duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link}
          key={link}
        >
          <Icon className="text-white" />
        </Link>
      ))}
    </div>
  );
};

export default SocialFooter;
