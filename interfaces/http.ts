export interface IHttp {
    protocol?: string;
    url?: string;
    port?: number;
    endpoint?: string;
}

export enum http { GET, POST };