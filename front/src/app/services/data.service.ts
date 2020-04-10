import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { IAnswer } from '../model/answer.interface';

@Injectable()
export class DataService {
    private root: string = "http://bk.uploader.vio.net.ua/api";
        
    constructor (private http: HttpClient) {}
    
    public uploadImg (fd: FormData): Observable<IAnswer<string>> {return this.sendRequest("POST", `files/img/upload`, fd);}
    
    private sendRequest (method: string, url: string, body: Object = null,): Observable<any> | null {        
        if (method === "GET") {
            return this.http.get (`${this.root}/${url}`);                
        } else if (method === "POST") {
            return this.http.post (`${this.root}/${url}`, body);
        }
        
        return null;                  
    }    
}
