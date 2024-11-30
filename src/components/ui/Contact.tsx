import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={twMerge("flex gap-xxs w-fit sm:flex-col sm:gap-xxxs text-TextLight", className)}>
      <Link href="mailto:info@CortexDigital" className="text-2xl sm:text-xl">
        info@CortexDigital
      </Link>
      <Link href="tel:+7 999 999 99 99" className="text-2xl sm:text-xl">
        +7 999 999 99 99
      </Link>
    </div>
  );
};

export default Contact;
