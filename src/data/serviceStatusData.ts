import type { ServiceType } from '../types/ServiceType';

export const serviceStatusData: ServiceType[] = [
    { service: 'Tasks service', status: 'ready', port: ':3002' },
    { service: 'Auth service', status: 'ready', port: ':3001' },
    { service: 'Notifications', status: 'ready', port: ':3004' },
    { service: 'API Gateway', status: 'ready', port: ':3000' },
    { service: 'RabbitMQ', status: 'connected' },
];
