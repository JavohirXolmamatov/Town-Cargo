import bg from "../../public/logo-cargo.png";
import { FaFacebookF, FaGoogle, FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full py-5 bg-black/30 ">
      <img src={bg} alt="bg" className="size-20 " />
      <div className="flex gap-3 text-black/70">
        <a href="#">
          <FaFacebookF className="hover:text-blue-500 transition-transform transform" />
        </a>
        <a href="#">
          <FaTwitter className="hover:text-blue-500 transition-transform transform" />
        </a>
        <a href="#">
          <FaGoogle className="hover:text-blue-500 transition-transform transform" />
        </a>
        <a href="#">
          <FaTelegram className="hover:text-blue-500 transition-transform transform" />
        </a>
        <a href="#">
          <TiSocialInstagram className="hover:text-blue-500 transition-transform transform" />
        </a>
      </div>
      <p className="text-black/70">© 2025 Town Cargo All rights reserved</p>
    </div>
  );
}

export default Footer;
