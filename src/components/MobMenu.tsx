import Navbar from "./Navbar";
import Button from "./ui/Button";
import Social from "./ui/Social";

const MobMenu = () => (
  <div className="hidden md:block">
    <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
    <label htmlFor="menu-icon"></label>
    <div
      className="nav fixed top-7 xs:top-4 xs:right-4 right-6 flex gap-sm flex-col items-center justify-center 
    z-10 overflow-hidden bg-AccentLight w-16 h-16 xs:w-14 xs:h-14 m-0"
    >
      <Navbar />
      <Button type="blue">Бесплатная консультация</Button>
      <Social className="burger-soc" />
    </div>
  </div>
);

export default MobMenu;
