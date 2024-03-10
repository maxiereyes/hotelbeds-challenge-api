import axios, { AxiosInstance, AxiosResponse } from "axios";
import { HttpResponse, HttpService } from "../../domain/adapters/http.adapter";
import { envs } from "../../config/envs";
import { generateSHA256Hex } from "../../config/crypto";

export class AxiosAdapter implements HttpService {
    private axiosInstance: AxiosInstance;

    constructor(baseUrl: string){
        this.axiosInstance = axios.create({
            baseURL: baseUrl
        })
        this.generateAuthorizationHeaderSignature()
    }

    private generateAuthorizationHeaderSignature = () => {
        const apiKey = envs.API_HOTELBEDS_KEY
        const apiSecret = envs.API_HOTELBEDS_SECRET
        const timestamp = Date.now().toString()
        const signature = `${apiKey}:${apiSecret}${timestamp}`
        const signatureHash = generateSHA256Hex(signature)

        this.axiosInstance.defaults.headers.common = {
            'X-Signature': signatureHash,
            'Api-key': apiKey
        }
    }

    async get<T>(url: string): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url)   
        return {
            data: response?.data,
            status: response?.status
        }
    }

    async post<T>(url: string, data: any): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data);
        return {
          data: response.data,
          status: response.status,
        };
      }
    
      async put<T>(url: string, data: any): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data);
        return {
          data: response.data,
          status: response.status,
        };
      }
    
      async delete<T>(url: string): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url);
        return {
          data: response.data,
          status: response.status,
        };
      }
}