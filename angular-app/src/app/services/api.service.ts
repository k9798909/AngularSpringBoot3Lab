import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  get<T>(url: string,params?: HttpParams,headers?: HttpHeaders): Promise<HttpResponse<T>> {
    headers = this.addTokenToHeaders(headers);

    const options: {
      headers: HttpHeaders | undefined;
      params: HttpParams | undefined;
      observe: 'response';
      responseType: 'json';
    } = {
      headers: headers,
      params: params,
      observe: 'response',
      responseType: 'json',
    };
    
    return firstValueFrom(this.http.get<T>(`${this.baseUrl}/${url}`, options));
  }

  post<T>(url: string,body: any,headers?: HttpHeaders): Promise<HttpResponse<T>> {
    headers = this.addTokenToHeaders(headers);
    const options: {
      headers: HttpHeaders | undefined;
      observe: 'response';
      responseType: 'json';
    } = {
      headers: headers,
      observe: 'response',
      responseType: 'json',
    };

    return firstValueFrom(
      this.http.post<T>(`${this.baseUrl}/${url}`, body, options)
    );
  }

  put<T>(url: string,body: any,headers?: HttpHeaders): Promise<HttpResponse<T>> {
    headers = this.addTokenToHeaders(headers);
    const options: {
      headers: HttpHeaders | undefined;
      observe: 'response';
      responseType: 'json';
    } = {
      headers: headers,
      observe: 'response',
      responseType: 'json',
    };

    return firstValueFrom(
      this.http.put<T>(`${this.baseUrl}/${url}`, body, options)
    );
  }

  delete<T>(url: string,headers?: HttpHeaders): Promise<HttpResponse<T>> {
    headers = this.addTokenToHeaders(headers);
    const options: {
      headers: HttpHeaders | undefined;
      observe: 'response';
      responseType: 'json';
    } = {
      headers: headers,
      observe: 'response',
      responseType: 'json',
    };

    return firstValueFrom(this.http.delete<T>(`${this.baseUrl}/${url}`, options));
  }

  /**
   * 新增token到headers，如果headers不存在創建一个新的headers
   * @param headers 
   * @returns 
   */
  addTokenToHeaders(headers?: HttpHeaders): HttpHeaders {
    const authorization: string = 'Bearer ' + this.tokenStorage.getItem('token') || '';
    if (!headers) {
      headers = new HttpHeaders();
    }
    headers = headers.append('Authorization', authorization);
    return headers;
  }

  /**
   * 取得token儲存的地方
   */
  get tokenStorage(): Storage {
    return sessionStorage;
  }
}
