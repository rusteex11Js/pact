import { CONSUMER, CONTRACTS_DIR, HOST, LOGS_DIR, LOG_LEVEL, PROVIDER } from "@test/pact/lib/config";
import { ApiService } from "@test/pact/services/api-services";
import { LogLevel, Pact } from '@pact-foundation/pact'
import { FIVE_SECONDS, HEADERS, THIRTY_SECONDS } from "@test/pact/lib/constants";
import { API_GET } from "@test/pact/lib/paths";
import { HttpStatusCode } from 'axios';


const Expected_RESPONSE_BODY = {

}

describe('demo for the pact test API', () => {
    const URL = HOST;
    let apiservice: ApiService;

    const PACT_PROVIDER = new Pact({
        log: LOGS_DIR,
        dir: CONTRACTS_DIR,
        consumer: CONSUMER,
        provider: PROVIDER,
        logLevel: LOG_LEVEL as LogLevel,
    });

    beforeAll(async () => {
        jest.setTimeout(FIVE_SECONDS);
        const OPTS = await PACT_PROVIDER.setup(); //start the mock server and wait for it to be available
        apiservice = new ApiService({ url: URL, port: OPTS.port });
    }, THIRTY_SECONDS); //wait for 15s max if the jest hook needs more than 5s for pact

    afterAll(() => PACT_PROVIDER.finalize());

    afterEach(() => PACT_PROVIDER.verify());

    describe('API test calls for the endpoint ', () => {

        it('GET call to retreive ', async () => {

            await PACT_PROVIDER.addInteraction({
                state: 'i want to retrieve the GET endpoint call',
                uponReceiving: 'a GET request to retrieve the data',

                withRequest: {
                    method: 'GET',
                    path: API_GET,
                    headers: HEADERS,
                },

                willRespondWith: {
                    status: HttpStatusCode.Ok,
                    body: Expected_RESPONSE_BODY
                }
            });

            const GET_EXPECTED_RESPONSE =  await apiservice.retrieve(API_GET,HEADERS);
            expect(GET_EXPECTED_RESPONSE.status).toBe(HttpStatusCode.Ok);
        });

    })

})