import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() postImg = '';

  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() is calling');
  }

  ngOnInit() {
    console.log('ngOnInit() is called');
  }

  ngOnChanges() {
    console.log('ngOnChanges() function');
  }

  ngDoCheck(): void {
    console.log('ngDoChecks()');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked()');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }

  ngOnDestroy(): void {
    console.log('onDestroy()');
  }
}
