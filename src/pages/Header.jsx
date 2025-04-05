import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { logo } from "../assets/index.js";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const i18nextLng = localStorage.getItem("i18nextLng");
  const menuRef = useRef(null); // menyuni nazorat qilish uchun ref

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

  return (
    <header className="w-full max-h-[80px] bg-[#172646] text-white font-bold fixed top-0 z-10">
      <div className="flex w-9/10 mx-auto h-[80px] justify-between items-center p-4 ">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <span className="uppercase font-bold">
            <a href="#home">town cargo</a>
          </span>
        </div>
        {/* // desctop menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-10">
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#home">{t("header.home")}</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#about">{t("header.about")}</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#services">{t("header.service")}</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#whyUs">{t("header.whyUs")}</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#news">{t("header.news")}</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#contact">{t("header.contact")}</a>
            </li>
            <select
              className="text-white bg-[#172646] border-none outline-none cursor-pointer"
              onChange={handleSelect}
              value={i18nextLng}
            >
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </ul>
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <select
            className="text-white bg-[#172646] border-none outline-none cursor-pointer md:hidden"
            onChange={handleSelect}
            value={i18nextLng}
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
          <button
            className={`${
              !isOpen ? "rotate-90" : "rotate-0"
            } md:hidden transition-transform transform`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? "|||" : "X"}
          </button>
        </div>
        {/* // mobile menu */}
        <nav
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } absolute transition-transform transform md:hidden z-999 flex flex-col bg-[#172646]  text-white w-[200px] h-screen top-[80px] right-0  items-start p-6 justify-top `}
        >
          <ul
            className="flex flex-col space-y-3"
            ref={menuRef}
            onClick={(e) => {
              setIsOpen(false);
            }}
          >
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#services">Our Services</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#services">Why Us</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#services">News</a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 transform">
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
