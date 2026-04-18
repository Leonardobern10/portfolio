import { availability } from '../../../data/availabilityData';
import ContentAvailability from './ContentAvailability';
import FooterCard from './FooterCard';
import HeaderCard from './HeaderCard';

export default function AvailabilityCard() {
    return (
        <div className="fade-in delay-100">
            <div className="bg-[#18181c] border border-white/9 rounded p-8">
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
