interface BurgerMenuIconProps {
  className?: string;
}
const BurgerMenuIcon = ({ className }: BurgerMenuIconProps) => {
  return (
    <svg
      className={className}
      width={50}
      height={50}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="currentColor" />
    </svg>
  );
};

export default BurgerMenuIcon;
