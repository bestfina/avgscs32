import Button from "../ui/Button";

const Tariffs = () => {
  return (
    <section id="tariffs">
      <div className="container flex flex-col">
        <h2>Цены на разработку</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md">
            <thead>
              <tr>
                <th className="border border-black"></th>
                <th className="border border-black px-6 py-4 text-left bg-slate-100">
                  <h5>Интернет-магазин на шаблоне</h5>
                  <p className="text-AccentDark font-bold">от 45.000 рублей</p>
                  <p className="text-sm text-gray-600">
                    Для тех, кому срочно нужен продающий сайт с минимальными затратами.
                  </p>
                  <Button type="blue" className="mt-xxs w-full">
                    Заказать
                  </Button>
                </th>
                <th className="border border-black px-6 py-4 text-left bg-slate-100">
                  <h5>Интернет-магазин с нуля</h5>
                  <p className="text-AccentDark font-bold">от 240.000 рублей</p>
                  <p className="text-sm text-gray-600">
                    В первую очередь решение ориентировано на уже существующий торговый бизнес.
                  </p>
                  <Button type="blue" className="mt-xxs w-full">
                    Заказать
                  </Button>
                </th>
                <th className="border border-black px-6 py-4 text-left bg-slate-100">
                  <h5>Индивидуальное решение</h5>
                  <p className="text-AccentDark font-bold">от 450.000 рублей</p>
                  <p className="text-sm text-gray-600">
                    Индивидуальные веб-проекты, рассчитанные на масштабные онлайн-продажи.
                  </p>
                  <Button type="blue" className="mt-xxs w-full">
                    Заказать
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Адаптивная версия и высокая скорость</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Каталог товаров, корзина, лк и промокоды</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Онлайн-оплата</td>
                <td className="border border-black px-6 py-4 text-center">✅ (стандартный модуль)</td>
                <td className="border border-black px-6 py-4 text-center">✅ (включен 1 нестандартный модуль)</td>
                <td className="border border-black px-6 py-4 text-center">✅ (включено 2 нестандартных модуля)</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Гарантия на работу</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Документация для работы с сайтом</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">CMS ( Wordpress или Bitrix )</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Индивидуальный дизайн</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Базовое Seo</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">
                  Уникальный контент ( картинки, иконки и др. )
                </td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Базовая интеграция с 1С и CRM</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Интеграция с внешней ERP-системой</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Полная интеграция с 1С и CRM</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">❌</td>
                <td className="border border-black px-6 py-4 text-center">✅</td>
              </tr>
              <tr>
                <td className="border border-black px-6 py-4 font-medium">Фиксированная цена и сроки</td>
                <td className="border border-black px-6 py-4 text-center">
                  <Button type="blue" className="w-full">
                    Получить расчёт
                  </Button>
                </td>
                <td className="border border-black px-6 py-4 text-center">
                  <Button type="blue" className="w-full">
                    Получить расчёт
                  </Button>
                </td>
                <td className="border border-black px-6 py-4 text-center">
                  <Button type="blue" className="w-full">
                    Получить расчёт
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
