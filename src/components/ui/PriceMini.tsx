interface PriceMiniProps {
  minPrice: string;
  maxPrice: string;
}

const PriceMini = ({ minPrice = "40.000", maxPrice = "160.000" }: PriceMiniProps) => {
  return (
    <div className="text-TextLight flex gap-xxs mt-sm xl:mt-xs">
      <div>
        Шаблон:
        <div className="font-bold"> от {minPrice} рублей</div>
      </div>
      <div className="w-px bg-white"></div>
      <div>
        Кастомное решение:
        <div className="font-bold"> от {maxPrice} рублей</div>
      </div>
    </div>
  );
};

export default PriceMini;
