import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TweetsService {

    constructor(private _http: HttpClient) { }

    public getTweets(searchText?: string): Observable<any> {
        return this._http.get((`http://10.21.23.160:3000/search/twitter?query=${searchText}`)).pipe(
            map(res => {
                return res;
            })
        )
    }
}