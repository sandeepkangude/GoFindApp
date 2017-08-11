import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FindService {

  constructor(private httpClient: Http, ) { }

  post(url: string): Observable<any> {
    if (url === undefined || url.length <= 0) {
      return Observable.throw('Please provide valid url');
    }

    const body = {
      'url': url
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this.httpClient.post('https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/', body, { headers: headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    if (res == null || res === undefined) {
      return {};
    }
    const body = res.json();
    return body || {};
  }

  handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error.status !== undefined) {
      if (error.status === 0) {
        errMsg = 'Sorry we are unable to connect the system at this time';
      } else if (error.status === 401 || error.status === 403) {
        errMsg = 'Sorry you are not authorized to use this resource';
      } else if (error.status === 404) {
        errMsg = 'Sorry we are unable to find this resource.';
      } else if (error.status === 500) {
        errMsg = 'Sorry we are unable to connect the system at this time';
      } else {
        errMsg = 'Sorry some error occured.';
      }
    } else {
      errMsg = 'Sorry some error occured.';
    }
    return Observable.throw(errMsg);
  }
}
