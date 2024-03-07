
export interface HttpResponse<T> {
    data: T,
    status: number
}

export interface HttpService {
    get<T>(url: string): Promise<HttpResponse<T>>
    post<T>(url: string, data: any): Promise<HttpResponse<T>>;
    put<T>(url: string, data: any): Promise<HttpResponse<T>>;
    delete<T>(url: string): Promise<HttpResponse<T>>;
}

