"use client";
import smoothFn from "@/lib/smoothFn";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  scroll?: boolean;
  big?: boolean;
}

const Logo = ({ scroll, big = false }: LogoProps) => (
  <Link
    href="/"
    className={twMerge("flex flex-col items-center w-fit")}
    scroll={false}
    onClick={() => scroll && smoothFn("hero")}
  >
    <Image
      src="/assets/images/logo.webp"
      alt="logo"
      width={50}
      height={50}
      quality={100}
      className={twMerge("mb-px xl:w-11 lg:w-10 xs:w-9", big ? "[&&]:w-14 xl:[&&]:w-12" : null)}
    />
    <div
      className={twMerge(
        "font-semibold xl:leading-4 xl:mt-[2px] xs:mt-1 xs:text-[15px] xs:leading-3",
        big ? "text-2xl [&&]:leading-5 [&&]:mt-2 xl:[&&]:text-xl xl:[&&]:mt-1 xl:[&&]:leading-4" : null
      )}
    >
      CortexDigital
    </div>
    <div
      className={twMerge(
        "text-sm tracking-[4px] ml-2 leading-[10px] xl:text-xs xs:text-[11px]",
        big ? "[&&]:text-lg xl:[&&]:text-base" : null
      )}
    >
      company
    </div>
  </Link>
);

export default Logo;
