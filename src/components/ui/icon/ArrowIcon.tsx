interface ArrowIconProps {
  className?: string;
}

const ArrowIcon = ({ className }: ArrowIconProps) => (
  <svg className={className} width="18" height="18" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5625 21.6562L5.35938 1.34375"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5625 21.6563L1.625 18.5703"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5625 21.6562L9.4375 18.4922"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
