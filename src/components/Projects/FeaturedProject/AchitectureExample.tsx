export default function ArchitectureExample() {
    return (
        <div className="flex flex-col justify-center">
            <div className="bg-[#0a0a0b] border border-white/[0.09] rounded p-6 font-mono-custom text-[12px] leading-[2] text-[#888580]">
                <p className="text-[10px] text-[#555250] uppercase tracking-[0.1em] mb-3">
                    Architecture
                </p>
                <div>┌─────────────────┐</div>
                <div>
                    │ <span className="text-accent">API Gateway</span> │ :3000
                </div>
                <div>└────────┬────────┘</div>
                <div>{'         '}│ TCP / MQ</div>
                <div>{'    '}┌────┴────┐</div>
                <div>
                    {'  '}
                    <span className="text-[#47ffd8]">Auth</span>
                    {'     '}
                    <span className="text-[#47ffd8]">Tasks</span>
                    {'  '}:3001/3002
                </div>
                <div>{'    '}└────┬────┘</div>
                <div>
                    {'         '}│ <span className="text-accent">RabbitMQ</span>
                </div>
                <div>{'  '}┌──────▼──────┐</div>
                <div>
                    {'  '}│{' '}
                    <span className="text-[#47ffd8]">Notifications</span> │ WS
                </div>
                <div>{'  '}└─────────────┘</div>
            </div>
        </div>
    );
}
