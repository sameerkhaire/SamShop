import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirApp]'
})
export class DirAppDirective {

  constructor() { }
//   <div class="my-container mx-auto border border-dark">
//  <h1 appDirApp>Welcome to Angular</h1>
//  <h2>hey!!!!!!!</h2>
// </div>
  @HostBinding('style.color') textColor: any;
  @HostListener('click') Onclick(){
    this.textColor='blue';
  }
  @HostListener('mouseover') onMouseOver(){
    this.textColor='orange';
  }
  // @HostListener('mouseout') onMouseOut(){
  //   this.textColor='green'
  // }
}
