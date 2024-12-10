import { Verifier } from "@pact-foundation/pact";
import { CONSUMER_VERSION_SELECTORS, PACT_BROKER_URL, PACT_HOST, PACT_PASSWORD, PACT_USERNAME, PORT, PROVIDER, PUBLISH_VERIFICATION_RESULT, VALIDATE_SSL } from "@test/pact/lib/config";

export const DYNAMIC_BASE_URL = `${PACT_HOST}:${PORT}/`

const PROVIDER_API_TOKEN = PROVIDER;

describe('demo test', () => {

    it('API test', async () => {
        const OPTS = {
            providerBaseUrl: DYNAMIC_BASE_URL,
            provider: PROVIDER_API_TOKEN,
            validateSSL: VALIDATE_SSL,
            publishVerificationResult: PUBLISH_VERIFICATION_RESULT,
            pactBrokerUrl: PACT_BROKER_URL,
            pactBrokerUsername: PACT_USERNAME,
            pactBrokerPassword: PACT_PASSWORD,
            consumerVersionSelector: CONSUMER_VERSION_SELECTORS,
        };

        const VERIFICATION_RESULT = await new Verifier(OPTS).verifyProvider();
        return VERIFICATION_RESULT;
    });

});