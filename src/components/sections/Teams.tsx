import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { TEAM } from "@/constants";

interface TeamsProps {
  className?: string;
}

const Teams = ({}: TeamsProps) => {
  const t = useTranslations("main.teams");
  return (
    <section id="teams">
      <div className="container flex flex-col">
        <h2>{t("title")}</h2>
        <div className="flex justify-between sm:flex-wrap gap-sm lg:gap-xs md:gap-xxs sm:gap-xxxs">
          <div className="w-2/4 relative flex items-end h-[550px] xl:h-[500px] lg:h-[430px] md:h-[350px] sm:h-80 xs:h-60 sm:w-full">
            <Image
              src="/assets/images/poster/corporate.webp"
              alt=""
              width={700}
              height={800}
              className="absolute h-full w-full -z-10 rounded-3xl object-cover"
            />
            {/* <div className="text-TextLight m-xs bg-black/40 rounded-3xl p-xs">
              <h3 className="mb-xxxs">Герман - основатель</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet aliquam sed tenetur eos harum
                ipsam, error mollitia quae commodi omnis quis quod, maiores corporis perspiciatis iure! Asperiores, rem
                placeat.
              </p>
            </div> */}
          </div>
          <div className="flex sm:justify-between flex-wrap gap-sm w-2/4 sm:w-full lg:gap-xs md:gap-xxs sm:gap-xxxs">
            {TEAM.map(({ id, img }) => (
              <div key={id} className="w-[47%] sm:w-[48.6%] xs:w-[48.2%] relative flex items-end sm:h-44 xs:h-32">
                <Image
                  src={img}
                  alt=""
                  width={700}
                  height={800}
                  className="absolute -z-10 h-full rounded-3xl object-cover"
                />
                {/* <div className="text-TextLight m-xs bg-black/40 rounded-3xl p-xs">
                  <h3 className="mb-xxxs">Герман - основатель</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet aliquam sed tenetur eos
                    harum ipsam, error mollitia quae commodi omnis quis quod, maiores corporis perspiciatis iure!
                    Asperiores, rem placeat.
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
