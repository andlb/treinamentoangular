import { CommonModule } from '@angular/common';
import { DropdonwDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        DropdonwDirective
    ],
    exports:[
        CommonModule,
        DropdonwDirective
    ]

})
export class SharedModule {

}