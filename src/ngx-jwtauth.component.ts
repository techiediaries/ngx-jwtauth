import { Component, Input, OnChanges, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-jwtauth',
  template: `<div #authElement [class]="cssClass"></div>`,
  styles: []
})
export class NgxJWTAuthComponent implements OnChanges {
 ngOnChanges(){

 }
}
