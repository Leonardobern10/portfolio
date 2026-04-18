import { contactLinks } from '../../data/contactLinksData';
import ButtonLink from '../ButtonLink';
import AvailabilityCard from './AvailabilityCard/AvailabilityCard';
import ContactLinks from './ContactLinks/ContactLinks';
import Glow from './Glow';
import InviteContact from './InviteContact';
import InviteText from './InviteText';
export default function Contact() {
    return (
        <section
            id="contact"
            className="py-28 bg-[#111113] relative overflow-hidden">
            {/* Glow */}
            <Glow />

            <div className="max-w-275 mx-auto px-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-20 items-start">
                    {/* Left */}
                    <div className="fade-in">
                        <InviteContact
                            beforeBreak="Let's build"
                            afterBreak="something"
                            emphasis="real."
                        />

                        <InviteText
                            text="I'm actively looking for my first professional role
                            in software engineering. If you're hiring or just
                            want to talk tech, I'd love to connect."
                        />

                        <ContactLinks contactLinks={contactLinks} />
                    </div>

                    {/* Right — Availability card */}
                    <AvailabilityCard />
                    <div className="flex flex-wrap justify-start gap-x-4">
                        <ButtonLink
                            title="Download my Resume"
                            href="public/DEV_FULLSTACK_LEONARDOBERNARDO_EN.pdf"
                            download
                        />
                        <ButtonLink
                            title="Baixe meu Curriculo"
                            href="public/DEV_FULLSTACK_LEONARDOBERNARDO.pdf"
                            download
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
