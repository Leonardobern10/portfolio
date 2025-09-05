import logo from "../assets/leo-logo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

function NavBar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="/SoftEngineer_LeonardoBernardo_Fullstack_2.pdf" download>
          <div className="flex flex-col items-center hover:text-red-500">
            <IoDocumentText className="navbar-item" />
            <p className="text-xs">Curriculo</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-bernardo25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="navbar-item" />
        </a>
        <a
          href="https://github.com/Leonardobern10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="navbar-item" />
        </a>
        <a
          href="https://www.instagram.com/dev_leonardobern/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="navbar-item" />
        </a>
        <a
          href="https://x.com/Leonardobern10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="navbar-item" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
