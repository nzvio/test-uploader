import { Injectable } from '@nestjs/common';

import { IAnswer } from "../../model/answer.interface";

@Injectable()
export class FilesService 
{
    public async uploadImg (file: any): Promise<IAnswer<string>>
    {
        console.log("img saved to " + file.filename);  
        const subdir = (new Date ()).getFullYear () + "-" + ((new Date ()).getMonth () + 1);
        return {statusCode: 200, data: `${subdir}/${file.filename}`};        
    }      
}
