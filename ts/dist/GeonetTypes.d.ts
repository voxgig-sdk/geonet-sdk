export interface Dns {
    answers: any[];
    from_loc: any;
    id?: string;
}
export interface DnsLoadMatch {
    id: string;
    rtype?: string;
}
export interface Geodn {
    answers: any[];
    from_loc: any;
    id?: string;
}
export interface GeodnLoadMatch {
    id: string;
    rtype?: string;
}
export interface Geoping {
    avg_rtt: number;
    from_loc: any;
    id?: string;
    ip: string;
    is_alive: boolean;
    max_rtt: number;
    min_rtt: number;
    packet_loss: number;
    packets_received: number;
    packets_sent: number;
    rtts: any[];
}
export interface GeopingLoadMatch {
    id: string;
}
export interface Ping {
    avg_rtt: number;
    from_loc: any;
    id?: string;
    ip: string;
    is_alive: boolean;
    max_rtt: number;
    min_rtt: number;
    packet_loss: number;
    packets_received: number;
    packets_sent: number;
    rtts: any[];
}
export interface PingLoadMatch {
    id: string;
}
