"use client";
import { LINK } from "@/constants";
import smoothFn from "@/lib/smoothFn";
import Link from "next/link";
interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => (
  <nav className={className}>
    <ul className="flex gap-sm xl:gap-xs lg:gap-xxs">
      {LINK.map(({ title, id, url }) => (
        <li key={id}>
          <Link
            href={"#" + url}
            className="text-[19px] xl:text-[17px] lg:text-[15px]"
            scroll={false}
            onClick={() => smoothFn(url)}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
