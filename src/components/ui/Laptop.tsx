"use client";
import { useRef, useState, useEffect } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Image from "next/image";

const Laptop = () => {
  const laptopImage = useRef<HTMLImageElement | null>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);

  const updateImageWidth = () => {
    if (laptopImage.current) {
      const width = laptopImage.current.width;
      setImageWidth(width - 257);
    }
  };

  useEffect(() => {
    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  return (
    <div className="w-2/3 relative m-auto">
      <div
        className="absolute flex flex-col gap-xxs justify-center items-center left-[130px] top-7 p-sm"
        style={{
          width: `${imageWidth}px`,
        }}
      >
        <Logo />
        <p className="text-[13px] leading-4 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus excepturi quod soluta eos possimus
          facilis, cumque fugiat minus placeat unde magni inventore. Dicta laborum sequi aperiam, recusandae eveniet
          facere vitae.
        </p>
        <Button type="lightBlue">Бесплатный аудит сайта</Button>
      </div>
      <Image ref={laptopImage} src="/assets/images/laptop.png" width={2000} height={496} loading="lazy" alt="Ноутбук" />
    </div>
  );
};

export default Laptop;
