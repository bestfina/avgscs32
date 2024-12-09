import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={twMerge("flex gap-xxs w-fit sm:flex-col sm:gap-xxxs text-TextLight", className)}>
      <Link href="mailto:info@cortexdigital.net" className="text-2xl lg:text-xl">
        info@cortexdigital.net
      </Link>
      <Link href="tel:+7(995)020-33-85" className="text-2xl lg:text-xl">
        +7 (995) 020-33-85
      </Link>
    </div>
  );
};

export default Contact;
