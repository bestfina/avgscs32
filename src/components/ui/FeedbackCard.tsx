import { usePopup } from "@/context/PopupContext";
import Image from "next/image";
import { ReactNode } from "react";
import InnerIcon from "./InnerIcon";

interface PopupProps {
  children: ReactNode;
  avatar: string;
  poster: string;
  video?: [string, string];
}

const FeedbackCard = ({ children, avatar, poster, video }: PopupProps) => {
  const { openPopup } = usePopup();
  return (
    <div className="flex flex-col border-2 border-TextDark rounded-3xl h-[650px] xxl:h-[550px] lg:h-[480px] overflow-hidden">
      <div className="flex items-center gap-xxxs pl-md py-3 border-b-2 border-TextDark">
        <div
          style={{ backgroundImage: `url("${avatar}")` }}
          className="w-11 h-11 bg-black rounded-full bg-center bg-cover"
        ></div>
        {children}
      </div>
      <div
        style={{ backgroundImage: `url("${poster}")` }}
        className="flex items-center justify-center bg-center bg-cover h-full"
      >
        <InnerIcon
          className="pl-1"
          onClick={() =>
            openPopup(
              video ? (
                <video className="h-full w-full object-cover" autoPlay controls playsInline>
                  <source src={video[0]} type="video/webm" />
                  <source src={video[1]} type="video/mp4" />
                </video>
              ) : (
                <Image src={poster} width={1000} height={800} alt="постер" />
              )
            )
          }
        >
          {video ? (
            <Image src="/assets/icons/play.svg" width={20} height={28} alt="проигрыватель" />
          ) : (
            <Image src="/assets/icons/loupe.svg" width={30} height={28} alt="приблизить" />
          )}
        </InnerIcon>
      </div>
    </div>
  );
};

export default FeedbackCard;
