import Link from "next/link";

const NotFound = () => (
  <section className="h-[80vh] px-xs flex flex-col items-center justify-center gap-xs">
    <div className="text-center">
      <div className="font-bold text-6xl text-center">404</div> Страница не найдена
    </div>
    <Link href="/" className="underline">
      Вернуть на главную
    </Link>
  </section>
);

export default NotFound;
