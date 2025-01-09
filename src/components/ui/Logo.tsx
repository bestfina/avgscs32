"use client";
import smoothFn from "@/lib/smoothFn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  big?: boolean;
  atTop?: boolean;
  isOpen?: boolean;
}

const Logo = ({ big = false, atTop, isOpen }: LogoProps) => {
  const currentPath = usePathname();
  return (
    <Link
      href="/"
      className={twMerge("flex flex-col items-center w-fit")}
      scroll={false}
      onClick={() => smoothFn("/#hero", currentPath)}
    >
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={50}
        height={50}
        priority
        className={twMerge("mb-px xl:w-11 lg:w-10 xs:w-9", big ? "[&&]:w-14 xl:[&&]:w-12" : null)}
      />
      <div
        className={twMerge(
          "font-semibold xl:leading-4 xl:mt-[2px] xs:mt-1 xs:text-[15px] xs:leading-3",
          atTop ? "text-TextLight" : "text-TextDark",
          isOpen && "sm:text-TextDark duration-500",
          big ? "text-TextDark text-2xl [&&]:leading-5 [&&]:mt-2 xl:[&&]:text-xl xl:[&&]:mt-1 xl:[&&]:leading-4" : null
        )}
      >
        CortexDigital
      </div>
      <div
        className={twMerge(
          "text-TextLight text-sm tracking-[4px] ml-2 leading-[10px] xl:text-xs xs:text-[11px]",
          atTop ? "text-TextLight" : "text-TextDark",
          isOpen && "sm:text-TextDark duration-500",
          big ? "text-TextDark [&&]:text-lg xl:[&&]:text-base" : null
        )}
      >
        company
      </div>
    </Link>
  );
};

export default Logo;
