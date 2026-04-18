import type { ServiceType } from '../../types/ServiceType';

export default function ServiceItem({ service, status, port }: ServiceType) {
    return (
        <div className="text-[#555250]">
            {'  '}• {service.padEnd(16)}{' '}
            <span className="text-[#28c840]">{status}</span> {port}
        </div>
    );
}
