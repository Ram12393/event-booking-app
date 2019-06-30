import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl: string;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
  ) {
    this.baseUrl = environment.httpUrl;
  }

  private getQueryString(queryObject = {}) {
    if (queryObject === {}) {
      queryObject = this.route.snapshot.queryParamMap;
    }
    const queryString = Object.keys(queryObject)
      .map((key) => {
        if (queryObject[key]) {
          return key + '=' + queryObject[key];
        } else {
          return;
        }
      })
      .join('&');
    if (queryString) {
      return '?' + queryString;
    } else {
      return;
    }
  }

  addHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  get(resource: string, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.get(url,
      {
        headers
      });
  }

  post(resource: string, data: any, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.post(url, data,
      {
        headers,
      });
  }




  put(resource: string, data: any, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.put(url, data,
      {
        headers
      });
  }

  delete(resource: string, queryStringObject = {}): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource + this.getQueryString(queryStringObject);
    return this.http.delete(url,
      {
        headers
      });
  }

}
