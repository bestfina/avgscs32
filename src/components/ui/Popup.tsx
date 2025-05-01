"use client";

import { usePopup } from "@/context/PopupContext";

const Popup: React.FC = () => {
  const { isOpen, content, closePopup } = usePopup();

  if (!isOpen) return null;

  const handleLinkClick = () => {
    closePopup();
  };

  return (
    <div
      className="fixed inset-0 cursor-pointer p-xxxs bg-black backdrop-blur bg-opacity-50 flex justify-center items-center z-50"
      onClick={closePopup}
    >
      <button
        className="bg-white text-[26px] rounded-full w-16 h-16 sm:w-12 sm:h-12 z-10 absolute top-xs right-xs sm:top-xxxs sm:right-xxxs text-TextDark"
        onClick={closePopup}
      >
        ✖
      </button>
      <div
        className="bg-white animate-slide-in cursor-default overflow-hidden overflow-y-auto rounded-3xl shadow-lg relative max-w-[1100px] max-h-[650px] lg:max-h-[550px] lg:max-w-[920px]"
        onClick={e => e.stopPropagation()}
      >
        <div
          onClick={e => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === "A") {
              handleLinkClick();
            }
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
