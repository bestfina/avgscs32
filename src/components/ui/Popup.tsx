"use client";

import { usePopup } from "@/context/PopupContext";

const Popup: React.FC = () => {
  const { isOpen, content, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 cursor-pointer p-xxxs bg-black backdrop-blur bg-opacity-50 flex justify-center items-center z-50"
      onClick={closePopup}
    >
      <button
        className="bg-AccentDark rounded-full w-16 h-16 sm:w-12 sm:h-12 z-10 absolute top-xs right-xs sm:top-xxxs sm:right-xxxs text-TextLight"
        onClick={closePopup}
      >
        ✖
      </button>
      <div
        className="bg-white animate-slide-in cursor-default overflow-hidden overflow-y-auto rounded-3xl shadow-lg relative max-w-[1000px] max-h-[650px] lg:max-h-[500px] lg:max-w-[800px]"
        onClick={e => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
};

export default Popup;
