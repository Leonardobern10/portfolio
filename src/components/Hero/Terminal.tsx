import { heroAnimateVariants } from '../../animations';
import { serviceStatusData } from '../../data/serviceStatusData';
import DotTerminal from './DotTerminal';
import FooterTerminal from './FooterTerminal';
import ProfileStatus from './ProfileStatus';
import RunCommand from './RunCommand';
import ServiceItem from './ServiceItem';
import { motion } from 'motion/react';

const dotColors = ['#ff0000', '#ffff00', '#00ff00'];
const profileStatus = ['Open to work', 'Remote friendly', 'Brazil · UTC-3'];

export default function Terminal() {
    return (
        <motion.div {...heroAnimateVariants}>
            <div className="bg-[#111113] border border-white/9 rounded-md p-6 font-mono-custom text-[13px] leading-[1.9]">
                <div className="flex gap-1.5 mb-5 items-center">
                    {dotColors.map((el) => (
                        <DotTerminal color={el} key={el} />
                    ))}
                </div>

                <RunCommand />

                {serviceStatusData.map((el) => (
                    <ServiceItem
                        service={el.service}
                        status={el.status}
                        port={el.port}
                    />
                ))}
                <FooterTerminal />
            </div>
            <ProfileStatus status={profileStatus} />
        </motion.div>
    );
}
