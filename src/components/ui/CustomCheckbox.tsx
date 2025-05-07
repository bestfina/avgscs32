import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CustomCheckboxProps {
  isAgreed: boolean;
  setIsAgreed: (prev: boolean) => void;
  children: ReactNode;
  className?: string;
  id?: string;
}

const CustomCheckbox = ({ isAgreed, setIsAgreed, children, id, className }: CustomCheckboxProps) => {
  const handleCheckboxChange = () => setIsAgreed(!isAgreed);

  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer w-fit">
      <input type="checkbox" id={id} checked={isAgreed} onChange={handleCheckboxChange} className="hidden" />
      <div
        className={twMerge(
          `min-w-6 min-h-6 border md:min-w-5 md:min-h-5 xs:min-w-4 xs:min-h-4 rounded-full flex items-center justify-center border-black`,
          className
        )}
      >
        {isAgreed && <div className="w-3 h-3 md:w-[10px] md:h-[10px] bg-AccentDark rounded-full" />}
      </div>
      {children}
    </label>
  );
};

export default CustomCheckbox;
