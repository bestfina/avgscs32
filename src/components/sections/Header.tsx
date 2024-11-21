import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import MobMenu from "../ui/MobMenu/MobMenu";
import Social from "../ui/Social";

const Header = () => (
  <header className="fixed z-10 w-full p-sm xl:p-xs lg:p-xxxs xs:p-xxxxs">
    <div
      className="container bg-BgLight flex items-center justify-between rounded-full py-4 xl:py-[10px]
     xs:py-xxxxs shadow-[0px_0px_50px_0px_rgba(0,0,0,0.25)]"
    >
      <Logo scroll />
      <Navbar className="md:hidden" />
      <div className="flex gap-xs xl:gap-xxs lg:gap-xxxs items-center md:hidden">
        <Button type="blue">Бесплатная консультация</Button>
        <Social />
      </div>
      <MobMenu />
    </div>
  </header>
);

export default Header;
