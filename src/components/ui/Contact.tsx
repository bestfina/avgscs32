import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={twMerge("flex gap-xxs w-fit sm:flex-col sm:gap-xxxs text-TextLight", className)}>
      <Link href="mailto:info@cortexdigital.net" className="text-2xl sm:text-xl">
        info@cortexdigital.net
      </Link>
    </div>
  );
};

export default Contact;
