import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) { }

  @HostListener('window:keydown', ['$event']) windowOnkeydown($event) {
      console.log($event.code);
      switch ($event.code) {
        case "ArrowUp" : 
          this.el.nativeElement.style.backgroundColor = "red";
          break;
        case "ArrowDown" : 
          this.el.nativeElement.style.backgroundColor = "green";
          break;
        case "ArrowLeft" : 
          this.el.nativeElement.style.backgroundColor = "orange";
          break;
        case "ArrowRight" : 
          this.el.nativeElement.style.backgroundColor = "yellow";
          break;
      }
  }


}
