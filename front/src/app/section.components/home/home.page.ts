import { Component } from '@angular/core';

import { IPhoto } from '../../model/photo.interface';
import { IHTMLInputEvent } from '../../model/htmlinputevent.interface';
import { IAnswer } from '../../model/answer.interface';
import { UploadService } from 'src/app/services/upload.service';

@Component({
	selector: 'home-page',
	templateUrl: './home.page.html',	
	styleUrls: ["./home.page.scss"]
})
export class HomePage {
	public photos: IPhoto[] = [];
	
	constructor(private uploadService: UploadService) {}

	public openFileDialog(): void {
        let input: HTMLInputElement = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";        
        input.onchange = (event: IHTMLInputEvent) => {
            const file: File = event.target.files[0];
            this.upload(file);
        };
        input.click();
	}

	private async upload(file: File): Promise<void> {        
		try {
			const fd: FormData = new FormData ();
			fd.append ("dir", "users");
			fd.append ("img", file, file.name);        
			const img: string = await this.uploadService.uploadImg (fd);			
			this.photos.push({img, active: false});                    
		} catch (err) {
			console.log(err);
		}		
	}
	
	public activate(photo: IPhoto): void {
		this.photos.forEach(p => {p.active = false;});
		photo.active = true;
	}

	public onDragEnter(event: DragEvent): void {		
		const target: HTMLElement = event.target as HTMLElement;		
		target.classList.add("over");		
	}

	public onDragLeave(event: DragEvent): void {		
		const target: HTMLElement = event.target as HTMLElement;		
		target.classList.remove("over");		
	}

	public onDragOver(event: DragEvent): void {
		event.preventDefault();
		event.stopPropagation();
	}

	public onDragStart(event: DragEvent): void {
		event.dataTransfer.setData("id", (event.target as HTMLElement).id);		
	}

	public onDrop(event: DragEvent): void {
		const target: HTMLElement = event.target as HTMLElement;		
		target.classList.remove("over");
		const movedIndex: number = parseInt(event.dataTransfer.getData("id").split("-")[1]);
		const targetIndex: number = parseInt((event.target as HTMLElement).id.split("-")[1]);
		const temp: IPhoto = this.photos[targetIndex];
		this.photos[targetIndex] = this.photos[movedIndex];
		this.photos[movedIndex] = temp;		
	}	
}
