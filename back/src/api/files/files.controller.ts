import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from "fs";

import { IAnswer } from "../../model/answer.interface";
import { FilesService } from './files.service';

@Controller('api/files')
export class FilesController 
{
    constructor (private filesService: FilesService) {}    

    // upload image
    @Post("img/upload")
    @UseInterceptors(FileInterceptor('img', {
        storage: diskStorage({
            destination: (req, file, cb) => {                
                const subdir = (new Date ()).getFullYear () + "-" + ((new Date ()).getMonth () + 1);
                const fullDir = `../static/assets/images/${req.body.dir}/${subdir}`;
                if (!fs.existsSync (fullDir)) fs.mkdirSync (fullDir);
                cb(null, fullDir);
            },
            filename: (req, file, cb) => {
                const newfilename: string = Math.round(+new Date()/1000).toString ();                
                return cb(null, `${newfilename}${extname(file.originalname)}`)
            }
        })
    }))    
    public uploadImg(@UploadedFile() file: any): Promise<IAnswer<string>> {
        return this.filesService.uploadImg (file);
    }    
}
