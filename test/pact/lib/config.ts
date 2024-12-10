import * as path from 'path';

export const PORT = 3006;
export const PACT_HOST = 'http://127.0.0.1';

export const PACT_BROKER_URL = 'broker url';
export const PACT_USERNAME = 'user name';
export const PACT_PASSWORD = 'passsword';
export const CONSUMER_VERSION_SELECTORS = [{
    latest: true,
}];
export const VALIDATE_SSL = false;
export const PUBLISH_VERIFICATION_RESULT = true;

export const HOST = 'http://127.0.0.1';
export const CONSUMER = 'consumer-test';
export const PROVIDER = 'provider-test';
export const LOG_LEVEL = 'DEBUG';
export const LOGS_DIR = path.resolve(
    process.cwd(),
    'pact-logs',
    'mockserver-integration.log'
);
export const CONTRACTS_DIR = path.resolve(process.cwd(), 'pact-contracts');