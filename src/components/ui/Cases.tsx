"use client";
import { CASE } from "@/constants";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Cases = () => {
  return (
    <>
      {CASE.map(({ id, title, description, image, url, data, advantages }) => {
        return (
          <div
            key={id}
            className={twMerge(
              "flex md:flex-col gap-sm sm:gap-xs justify-between items-center mb-sm",
              id % 2 === 0 ? "flex-row-reverse" : null
            )}
          >
            <div className="w-2/4 md:w-full flex flex-col gap-xxs">
              <div>
                <span>{data}</span>
                <h3>{title}</h3>
              </div>
              <Link href={url} target="_blank" className="w-fit underline">
                {url}
              </Link>
              <div className="flex flex-wrap gap-xxxs">
                {advantages.map((item, index) => (
                  <span key={index} className="bg-black font-bold px-2 py-1 text-TextLight rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              {description.map(({ subject, text }, index) => (
                <p key={index}>
                  <b>{subject} </b>
                  {text}
                </p>
              ))}
              <Button type="blue">Хочу так же!</Button>
            </div>
            <Image
              src={image}
              alt=""
              width={1000}
              height={600}
              loading="lazy"
              className="rounded-3xl object-cover h-full w-2/4 border-4 border-dotted border-black md:w-full"
            />
          </div>
        );
      })}
    </>
  );
};

export default Cases;
