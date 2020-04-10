import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HomePage,         
    ],
    exports: [
        HomePage,
    ],
    providers: []
})
export class HomeModule {}
