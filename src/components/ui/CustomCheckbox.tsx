import { ReactNode } from "react";

interface CustomCheckboxProps {
  isAgreed: boolean;
  setIsAgreed: (prev: boolean) => void;
  children: ReactNode;
}

const CustomCheckbox = ({ isAgreed, setIsAgreed, children }: CustomCheckboxProps) => {
  const handleCheckboxChange = () => setIsAgreed(!isAgreed);

  return (
    <label htmlFor="agree" className="flex items-center gap-2 cursor-pointer w-fit">
      <input type="checkbox" id="agree" checked={isAgreed} onChange={handleCheckboxChange} className="hidden" />
      <div
        className="w-6 h-6 border-2 rounded-full flex items-center justify-center 
      border-AccentDark"
      >
        {isAgreed && <div className="w-3 h-3 bg-AccentDark rounded-full" />}
      </div>
      {children}
    </label>
  );
};

export default CustomCheckbox;
