import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClipService } from '../services/clip.service';
import { IClip } from '../models/clip.model';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.css'],
})
export class ClipsListComponent implements OnInit, OnDestroy {
  constructor(private clipService: ClipService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll);
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;

    const bottomOfWindow = Math.round(scrollTop) + offsetHeight === innerHeight;

    if (bottomOfWindow) {
      console.log('bottom of page');
    }
  };
}
