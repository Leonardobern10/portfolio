import type { SkillTopic } from "../../types/SkillTopicType";

type SkillsProps = {
  skills: SkillTopic[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="space-y-6">
      {skills.map((group) => (
        <div key={group.label}>
          <p className="font-mono-custom text-[11px] text-[#555250] tracking-[0.1em] uppercase mb-3">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item.name}
                className={`skill-tag font-mono-custom text-[12px] px-3 py-1.5 border rounded-sm cursor-default ${
                  item.highlight
                    ? "skill-tag-highlight"
                    : "border-white/[0.09] text-[#888580]"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
