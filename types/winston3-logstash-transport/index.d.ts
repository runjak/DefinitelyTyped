// Type definitions for winston3-logstash-transport 1.0
// Project: https://github.com/OutofSyncStudios/winston-logstash-transport
// Definitions by: Jakob Runge <https://github.com/runjak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Transport from 'winston-transport';

export enum LogstashMode {
    tcp = 'tcp',
    tcp4 = 'tcp4',
    tcp6 = 'tcp6',
    udp = 'udp',
    udp4 = 'udp4',
    udp6 = 'udp6',
}

// See https://www.npmjs.com/package/winston3-logstash-transport#api for further details
export interface LogstashTransportOptions extends Transport.TransportStreamOptions {
    mode?: LogstashMode; // The protocol to use to connect to LogStash. tcp is an alias for tcp4 and udp is an alias for udp4.
    localhost?: string; // The hostname sent to LogStash
    host: string; // The LogStash server ip or hostname
    port: number; // The LogStash server port number
    applicationName?: string; // The application name sent to LogStash
    pid?: string; // The Operating System process ID for this process
    silent?: boolean; // Offline/Silent mode enabled
    maxConnectRetries?: number; // The number of attempts to reconnect to make before erroring out
    timeoutConnectRetries?: number; // The number of milliseconds to wait between connection attempts
    label?: string; // The LogStash label to send with the information
    sslEnable?: boolean; // Whether SSL/TLS connection should be attempted when connecting via TCP
    sslKey?: string; // The filepath to the SSL Key
    sslCert?: string; // The filepath to the SSL Cert
    sslCA?: string | string[]; // The filepath(s) to the Certificat Authority (CA) Intermediary Certs
    sslPassPhrase?: string; // The SSL Cert PassPhrase (if any)
    rejectUnauthorized?: boolean; // Enable connection rejection when cert is not valid
    trailingLineFeed?: boolean; // Enable appending end of line character to UDP output
    trailingLineFeedChar?: string; // The type of end of line character(s) to append to UDP output
}

declare class LogstashTransport extends Transport {
    // eslint-disable-next-line @typescript-eslint/no-misused-new
    constructor(options?: LogstashTransportOptions);
}

export default LogstashTransport;
