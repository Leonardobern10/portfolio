import logo from '../assets/leo-logo1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import { LanguageType } from '../types/LanguageType';
import useLanguageStore from '../store/useLanguage';

function NavBar() {
    const { toggleLanguage, getViewLanguage } = useLanguageStore();
    const languageStr = getViewLanguage().toString();

    const width = window.innerWidth;

    if (width < 768) {
        console.log('Mobile');
    }

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <ul className="m-8 flex items-center justify-center gap-4 text-2xl">
                {width > 768 && (
                    <a
                        href="/DEV_FULLSTACK_LEONARDOBERNARDO.pdf"
                        download="Curriculo_LEONARDO.pdf"
                    >
                        <div className="flex flex-col items-center hover:text-red-500">
                            <IoDocumentText className="navbar-item" />
                            <p className="text-xs">Curriculo</p>
                        </div>
                    </a>
                )}
                <a
                    href="https://www.linkedin.com/in/leonardobernardo-dev/"
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
                <button
                    onClick={toggleLanguage}
                    className="h-fit inline-block rounded bg-neutral-700 px-2 md:px-2 
                            py-2 md:py-1 text-white text-xs font-semibold hover:bg-red-500
                          hover:text-black transition cursor-pointer"
                >
                    {languageStr}
                </button>
            </ul>
        </nav>
    );
}

export default NavBar;
