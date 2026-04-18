import { availability } from '../../../data/availabilityData';
import ContentAvailability from './ContentAvailability';
import FooterCard from './FooterCard';
import HeaderCard from './HeaderCard';

export default function AvailabilityCard() {
    return (
        <div className="fade-in [transition-delay:100ms]">
            <div className="bg-[#18181c] border border-white/[0.09] rounded p-8">
                <HeaderCard title="Available now" />

                <ContentAvailability data={availability} />

                <FooterCard
                    title="Response time"
                    content="Usually within 24h"
                />
            </div>
        </div>
    );
}
