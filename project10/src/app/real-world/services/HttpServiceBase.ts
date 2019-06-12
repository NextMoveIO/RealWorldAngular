import { HttpClient, HttpParams } from "@angular/common/http";

export abstract class HttpServiceBase {
    constructor(protected baseUrl: string, protected httpClient: HttpClient) { }

    async get<C>(path: string, queryParams?: HttpParams, fromApiFn?: Function): Promise<C> {
        const url = `${this.baseUrl}/${path}`;
        const promise = new Promise((resolve, reject) => {
            this.httpClient.get(url, { params: queryParams })
                .subscribe((
                    data: any) => resolve(typeof fromApiFn === "function" ? fromApiFn(data.data || data) : data.data || data),
                    (reason) => reject(reason));
        });

        return await this.executePromise(promise, url, "GET", queryParams);
    }

    async post<C>(path: string, entity: any, fromApiFn?: any, options?: any): Promise<C> {
        const url = `${this.baseUrl}/${path}`;
        const promise = new Promise((resolve, reject) => {
            this.httpClient.post(url, entity, options)
                .subscribe(
                    (data) => resolve(typeof fromApiFn === 'function' ? fromApiFn(data) : data),
                    (reason) => reject(reason));
        });

        return await this.executePromise(promise, url, "POST", entity);
    }

    async put<C>(path: string, entity: any, fromApiFn?: any): Promise<C> {
        const url = `${this.baseUrl}/${path}`;
        const promise = new Promise((resolve, reject) => {
            this.httpClient.put(url, entity)
                .subscribe(
                    (data) => resolve(typeof fromApiFn === 'function' ? fromApiFn(data) : data),
                    (reason) => reject(reason));
        });

        return await this.executePromise(promise, url, "PUT", entity);
    }

    async delete(path: string): Promise<any> {
        const url = `${this.baseUrl}/${path}`;
        console.log("delete on: ", url);
        const promise = new Promise((resolve, reject) => {
            this.httpClient.delete(url).subscribe((data) => resolve(data), (reason) => reject(reason));
        });

        console.log("calling delete on: ", url);
        return await this.executePromise(promise, url, "DELETE", null);
    }

    protected async executePromise(promise: Promise<{}>, url: string, method: string, entity: any) {
        let response;

        try {
            response = await promise;

            // note: workaround when a successful response returns null or undefined
            if (!response) {
                response = {};
            }

        } catch (e) {
            console.error(e);
            // non 200 response
            // todo: handle 400 by reading the validation errors from the response
        }

        return response;
    }

}
