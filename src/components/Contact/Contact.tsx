import { availability } from '../../data/availabilityData';
import { contactLinks } from '../../data/contactLinksData';
import ContactLinks from './ContactLinks/ContactLinks';
import Glow from './Glow';
import InviteContact from './InviteContact';
import InviteText from './InviteText';
export default function Contact() {
    return (
        <section
            id="contact"
            className="py-28 bg-[#111113] relative overflow-hidden"
        >
            {/* Glow */}
            <Glow />

            <div className="max-w-[1100px] mx-auto px-10 relative">
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
                    <div className="fade-in [transition-delay:100ms]">
                        <div className="bg-[#18181c] border border-white/[0.09] rounded p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <span className="font-mono-custom text-[12px] text-accent uppercase tracking-[0.08em]">
                                    Available now
                                </span>
                            </div>

                            <div className="space-y-3 mb-8">
                                {availability.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="font-mono-custom text-[12px] text-accent">
                                            ✓
                                        </span>
                                        <span className="text-[#888580] text-[14px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/[0.06] pt-6">
                                <p className="font-mono-custom text-[11px] text-[#555250] uppercase tracking-wide mb-1">
                                    Response time
                                </p>
                                <p className="text-[#888580] text-[14px]">
                                    Usually within 24h
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
