import { ReactNode } from "react";

interface CustomCheckboxProps {
  isAgreed: boolean;
  setIsAgreed: (prev: boolean) => void;
  children: ReactNode;
  id?: string;
}

const CustomCheckbox = ({ isAgreed, setIsAgreed, children, id }: CustomCheckboxProps) => {
  const handleCheckboxChange = () => setIsAgreed(!isAgreed);

  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer w-fit">
      <input type="checkbox" id={id} checked={isAgreed} onChange={handleCheckboxChange} className="hidden" />
      <div
        className="min-w-6 min-h-6 border-2 md:min-w-5 md:min-h-5 rounded-full flex items-center justify-center 
        border-black"
      >
        {isAgreed && <div className="w-3 h-3 md:w-[10px] md:h-[10px] bg-AccentDark rounded-full" />}
      </div>
      {children}
    </label>
  );
};

export default CustomCheckbox;
