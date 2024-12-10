import axios, { AxiosHeaders, AxiosPromise } from "axios";
import * as http from 'http';

export class ApiService {

    private url: string;
    private port: number;

    constructor(endpoint: { url: string; port: number }) {
        this.url = endpoint.url;
        this.port = endpoint.port;
    }

    public retrieve = (endpointUrl: string, headers?: AxiosHeaders, query?: any): AxiosPromise => {
        return axios.request({
            baseURL: `${this.url}:${this.port}`,
            method: 'GET',
            headers,
            url: endpointUrl,
            httpAgent: new http.Agent({ keepAlive: false }),
            params: query,
        });
    };

}