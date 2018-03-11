import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Repository {

    constructor(private http :HttpClient){

    }
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',    
          'X-CSRFToken': this.getCookie('csrftoken')
        })
    };

    getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length == 2) 
          return parts.pop().split(";").shift();
    }

    public get<T>(path: string) {
        return this.http.get<T>(path, this.httpOptions);
    }
    public post<T>(path: string, body: string) {        
        return this.http.post<T>(path, body, this.httpOptions);
    }

    public put<T>(path: string, body: string) {
        return this.http.put<T>(path, body, this.httpOptions );
    }

    public delete<T>(path: string) {
        return this.http.delete<T>(path, this.httpOptions);
    }
}