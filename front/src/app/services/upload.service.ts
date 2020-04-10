import { Injectable } from "@angular/core";

import { DataService } from './data.service';

@Injectable()
export class UploadService {
    constructor(private dataService: DataService) {}

    public uploadImg (fd: FormData): Promise<string> {
        return new Promise((resolve, reject) => {
            this.dataService.uploadImg (fd).subscribe(res => {
                if (res.statusCode === 200) {
                    resolve(res.data);
                } else {
                    reject(res.error);
                }
            }, err => {
                reject(err.message);
            });
        });        
    }    
}
