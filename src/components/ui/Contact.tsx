import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={twMerge("flex gap-xxs", className)}>
      <Link href="mailto:info@CortexDigital">info@CortexDigital</Link>
      <Link href="tel:+7 999 999 99 99">+7 999 999 99 99</Link>
    </div>
  );
};

export default Contact;
