"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { PAGES } from "@/constants";
import Logo from "./ui/Logo";
import ArrowNav from "./ui/ArrowNav";

const Book = () => {
  const [activePages, setActivePages] = useState(false);
  const [arrPage, setArrPage] = useState<number[]>([]);

  // Установка активного состояния страниц при скролле
  useEffect(() => {
    if (arrPage[arrPage.length - 1] === 3) {
      setArrPage([]);
    } else if (arrPage[arrPage.length - 1] === 5) {
      setArrPage([2]);
    } else if (arrPage[arrPage.length - 1] === 7) {
      setArrPage([4]);
    } else if (arrPage[arrPage.length - 1] === 9) {
      setArrPage([6]);
    }

    const handleScroll = () => {
      const offsetY = window.scrollY;
      const pointTop = window.innerWidth < 1279 ? 550 : window.innerWidth < 1600 ? 700 : 900;
      const pointBottom = window.innerWidth < 1279 ? 1000 : window.innerWidth < 1600 ? 1200 : 1500;
      const isActive = offsetY > pointTop && offsetY < pointBottom;
      setActivePages(isActive);
      if (!isActive) setArrPage([]);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [arrPage]);

  function changePage(id: number): string {
    let strClass = "";
    arrPage.map(item => {
      if ((id === 2 || id === 3) && item >= 2) {
        strClass = "page_active-2";
      } else if ((id === 4 || id === 5) && item >= 4) {
        strClass = "page_active-3";
      } else if ((id === 6 || id === 7) && item >= 6) {
        strClass = "page_active-4";
      } else if ((id === 8 || id === 9) && item >= 8) {
        strClass = "page_active-5";
      }
    });
    return strClass;
  }

  const togglePageVisibility = (id: number) => {
    setArrPage(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <div className="component sm:hidden">
      <ul className="align">
        <li className="md:!pl-sm">
          <div
            className={twMerge(
              "book relative w-[450px] lg:w-96 md:w-[340px] h-[600px] lg:h-[520px] md:h-[500px] duration-1000"
            )}
          >
            <ul className={twMerge("hardcover_front", activePages && "hardcover_front_active")}>
              <li
                className="shadow-[0_0_50px_-12px_rgb(0_0_0_/_0.25)] bg-white overflow-hidden absolute 
          inset-0 flex flex-col justify-center items-center gap-sm"
              >
                <p className="max-w-72 font-semibold text-2xl">Проекты и их описания от нашей компании:</p>
                <Logo />
              </li>
              <li className="back-cover" />
            </ul>
            <ul className="page">
              {PAGES.map(({ id, title, url, image, description, data }) => (
                <li key={id} className={twMerge(activePages && id === 1 ? "page_active" : null, changePage(id))}>
                  <div
                    className={twMerge(
                      "flex flex-col items-center justify-between h-full p-xs",
                      id % 2 === 0 ? "page-side" : "rotate-page"
                    )}
                  >
                    <div className="flex flex-col gap-xxxs">
                      <h5>{title}</h5>
                      <Link href={url} target="_blank" className="underline">
                        {url}
                      </Link>
                      <Image
                        src={image}
                        alt={"главный экран сайта " + url}
                        width={300}
                        height={250}
                        loading="lazy"
                        className="rounded-3xl w-full"
                      />
                      {description.map(({ subject, text }, index) => (
                        <p key={index} className="text-sm lg:text-xs">
                          <b>{subject}</b> {text}
                        </p>
                      ))}
                    </div>
                    <div>
                      {id === PAGES[0].id || id === PAGES[PAGES.length - 1].id ? null : (
                        <button onClick={() => togglePageVisibility(id)}>
                          <ArrowNav className={twMerge(id % 2 === 0 ? "-rotate-90" : "rotate-90")} />
                        </button>
                      )}
                      <div>{data}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="hardcover_back">
              <li />
              <li />
            </ul>
            <ul className="book_spine">
              <li className="bg-white" />
              <li className="bg-AccentDark" />
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Book;
