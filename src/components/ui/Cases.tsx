"use client";
import ArrowIcon from "./icon/ArrowIcon";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { TCase } from "@/types";

interface CasesProps {
  caseArr: TCase[];
  main?: boolean;
}

const Cases = ({ caseArr, main }: CasesProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -100px 0px" });
  const [visibleVideos, setVisibleVideos] = useState<{ [key: number]: boolean }>({});
  const [activeTab, setActiveTab] = useState<string>("Все");

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const categories = ["Все", "Лендинги", "Интернет-магазины", "Корпоративные сайты", "Визитки"];

  const filteredCases = activeTab === "Все" ? caseArr : caseArr.filter(item => item.category === activeTab);

  useEffect(() => {
    if (isInView) {
      const newVisibleVideos = filteredCases.reduce((acc, { id }) => {
        acc[id] = true;
        return acc;
      }, {} as { [key: number]: boolean });

      setVisibleVideos(newVisibleVideos);
    }
  }, [isInView, filteredCases]);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      const videoId = Number(id);
      if (video) {
        if (visibleVideos[videoId]) {
          video.play().catch(() => {
            console.warn(`Unable to play video with id ${videoId}`);
          });
        } else {
          video.pause();
        }
      }
    });
  }, [visibleVideos]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    if (videoRefs.current) {
      Object.entries(videoRefs.current).forEach(([id, video]) => {
        const videoId = Number(id);
        if (video && !visibleVideos[videoId]) {
          video.pause();
        }
      });
    }
  };

  return (
    <div ref={containerRef}>
      {main && (
        <div className="flex flex-wrap gap-sm x:gap-xs mb-sm xs:mb-xs">
          {categories.map(category => (
            <button
              key={category}
              className={
                activeTab === category ? "bg-AccentDark px-xs py-2 sm:px-xxs rounded-full text-white duration-300" : ""
              }
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-between gap-md xxl:gap-sm">
        {filteredCases.map(({ id, title, video, url, description, poster }) => (
          <motion.a
            href={url}
            key={id}
            target="_blank"
            className="relative w-[48.5%] lg:w-[48.4%] md:w-[48%] sm:w-full duration-300 rounded-3xl p-sm xl:p-xs md:p-xxs bg-slate-100 group overflow-hidden"
            {...(!main && {
              initial: "hidden",
              animate: isInView ? "visible" : "hidden",
              variants: cardVariants,
            })}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="sm:underline">{title}</h3>
            <p className="mb-xs mt-xxxs xl:mb-xxs">{description}</p>
            <video
              ref={el => {
                if (el) videoRefs.current[id] = el;
              }}
              className="w-full object-cover rounded-3xl"
              controls={false}
              muted
              playsInline
              loop
              poster={poster}
            >
              <source src={video[1]} type="video/webm" />
              <source src={video[0]} type="video/mp4" />
            </video>
          </motion.a>
        ))}

        {!main && (
          <motion.a
            href="/portfolio"
            className="w-[48.5%] lg:w-[48.4%] md:w-[48%] sm:w-full sm:p-2 bg-black/80 hover:bg-black duration-300 rounded-3xl flex justify-center gap-xxs md:gap-xxxxs items-center text-TextLight text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:rounded-full sm:text-xl sm:h-fit"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            Смотреть ещё <ArrowIcon className="-rotate-90 w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6" />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Cases;
