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
    const options: {
      headers: HttpHeaders | undefined;
      params:HttpParams | undefined;
      observe: 'response';
      responseType: 'json';
    } = {
      headers: headers,
      params: params,
      observe: 'response',
      responseType: 'json',
    };
    return firstValueFrom(
      this.http.get<T>(`${this.baseUrl}/${url}`, options)
    );
  }

  post<T>(url: string,body: any,headers?: HttpHeaders): Promise<HttpResponse<T>> {
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

  // Add methods for other HTTP verbs like put, patch, delete, etc.
}
