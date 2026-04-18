import ButtonMain from '../ButtonMain';
import Logo from './Logo';
import NavBarContainer from './NavBarContainer';

const navItems = ['About', 'Projects', 'Writing', 'Contact'];

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 border-b border-white/6 bg-[#0a0a0b]/85 backdrop-blur-md">
            <Logo />
            <NavBarContainer items={navItems} />
            <ButtonMain title="Hire me" href="#contact" small />
        </nav>
    );
}
