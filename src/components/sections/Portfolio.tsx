"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../ui/Logo";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { PAGES } from "@/constants";

const Portfolio = () => {
  const [activePages, setActivePages] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;
      setActivePages(offsetY > 850 && offsetY < 1500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <h2>История о наших проектов</h2>
        <div className="component">
          <ul className="align">
            <li>
              <div className={twMerge("book relative w-[450px] h-[600px] duration-1000", activePages && "scale-125")}>
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
                  {PAGES.map(({ id, title, url, image, description }) => (
                    <li key={id} className={twMerge(activePages && id === 1 ? "page_active" : null)}>
                      <div
                        className={twMerge(
                          "flex flex-col items-center p-xs gap-2",
                          id % 2 === 1 ? "rotate-book" : null
                        )}
                      >
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
                          <p key={index} className="text-base">
                            <b>{subject}</b> {text}
                          </p>
                        ))}
                        <button
                          onClick={() => {
                            console.log(1);
                          }}
                        >
                          {id !== 1 ? (
                            <Image
                              src="/assets/icons/arrow-bottom.svg"
                              alt="стрелка"
                              width={10}
                              height={20}
                              className="-rotate-90"
                            />
                          ) : null}
                        </button>
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
      </div>
    </section>
  );
};

export default Portfolio;
