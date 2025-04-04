import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full max-h-[80px] bg-[#172646] text-white font-bold fixed top-0 z-10">
      <div className="flex w-9/10 mx-auto h-[80px] justify-between items-center p-4 ">
        <div className="flex items-center space-x-2">
          <img
            src="../../public/logo-cargo.png"
            alt="logo"
            className="h-10 w-10"
          />
          <span className="uppercase font-bold">town cargo</span>
        </div>
        {/* // desctop menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-10">
            <li className="">
              <a href="#home" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#whyUs">Why Us</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
            <select className="text-white bg-[#172646] border-none outline-none cursor-pointer">
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </ul>
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <select className="text-white bg-[#172646] border-none outline-none cursor-pointer md:hidden">
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
          } absolute transition-transform transform md:hidden flex flex-col bg-[#172646]  text-white w-[200px] h-screen top-[80px] right-0  items-start p-6 justify-top `}
        >
          <ul className="flex flex-col space-y-3">
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#services">Our Services</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#services">Why Us</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#services">News</a>
            </li>
            <li className="hover:text-blue-500 transition-transform transform">
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
