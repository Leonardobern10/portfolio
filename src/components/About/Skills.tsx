import {
    containerListAnimationVariants,
    itemListAnimationVariants,
} from '../../animations';
import type { SkillTopic } from '../../types/SkillTopicType';
import { motion } from 'motion/react';

type SkillsProps = {
    skills: SkillTopic[];
};

export default function Skills({ skills }: SkillsProps) {
    return (
        <motion.div
            variants={containerListAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            className="space-y-6">
            {skills.map((group) => (
                <motion.div
                    variants={itemListAnimationVariants}
                    key={group.label}>
                    <p className="font-mono-custom text-[11px] text-[#555250] tracking-widest uppercase mb-3">
                        {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <span
                                key={item.name}
                                className={`skill-tag font-mono-custom text-[12px] px-3 py-1.5 border rounded-sm cursor-default ${
                                    item.highlight
                                        ? 'skill-tag-highlight'
                                        : 'border-white/9 text-[#888580]'
                                }`}>
                                {item.name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
