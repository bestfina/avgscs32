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
        className="bg-AccentDark rounded-full w-16 h-16 sm:w-12 sm:h-12 absolute top-xs right-xs text-TextLight"
        onClick={closePopup}
      >
        ✖
      </button>
      <div
        className="bg-white animate-slide-in cursor-default overflow-hidden rounded-3xl shadow-lg relative"
        onClick={e => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
};

export default Popup;
