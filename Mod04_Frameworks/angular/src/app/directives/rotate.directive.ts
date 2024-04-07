import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: 'img[appRotate]',
  standalone: true,
})
export class RotateDirective {
  @Input()
  rotate: number = 0;
  @Input()
  step: number = 10;
  @Output()
  rotationChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private el: ElementRef) {}

  @HostListener('click')
  rotateImage() {
    this.rotate += this.step;
    this.rotate %= 360;
    this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
    this.rotationChange.emit(this.rotate);
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      this.rotate -= this.step;
      this.rotate %= 360;
      this.el.nativeElement.style.transform = `rotate(${this.rotate}deg`;
      this.rotationChange.emit(this.rotate);
    }
  }
  ngOnInit(): void {
    this.rotateImage();
  }
}
