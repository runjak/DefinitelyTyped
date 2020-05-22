import * as winston from 'winston';
import LogstashTransport, { LogstashTransportOptions, LogstashMode } from 'winston3-logstash-transport';

const str = '';
const num = 1;
const bool = true;
const mode = LogstashMode.udp;

const minimalOptions: LogstashTransportOptions = { host: str, port: num };
const maximalOptions: LogstashTransportOptions = {
    mode,
    localhost: str,
    host: str,
    port: num,
    applicationName: str,
    pid: str,
    silent: bool,
    maxConnectRetries: num,
    timeoutConnectRetries: num,
    label: str,
    sslEnable: bool,
    sslKey: str,
    sslCert: str,
    sslCA: str,
    sslPassPhrase: str,
    rejectUnauthorized: bool,
    trailingLineFeed: bool,
    trailingLineFeedChar: str,
};
const multipleCaOptions: LogstashTransportOptions = {
    ...maximalOptions,
    sslCA: [str, str, str],
};

const logstashTransport = new LogstashTransport(minimalOptions);

winston.add(logstashTransport);

const logger: winston.Logger = winston.createLogger({ transports: [logstashTransport] });
