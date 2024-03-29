import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor() { }
  isZoomed: boolean = false;
  isBlackBackground: boolean = false;

  private scrollChangeCallback!: () => void;
  currentPosition: any;
  startPosition!: number;
  ngOnInit(): void {
    AOS.init({
      duration:1500,
      delay:300,
    })  

  }
  ngAfterViewInit() {
    this.scrollChangeCallback = () => this.onContentScrolled(event);
    window.addEventListener('scroll', this.scrollChangeCallback, true);
  }
  onContentScrolled(e: any) {
    const isMobile = window.innerWidth < 768; // Adjust the threshold for mobile screens as needed
    if (isMobile) return; // Do nothing if it's a mobile screen
  
    const scrollTop = e.srcElement.scrollTop || window.scrollY; // For cross-browser compatibility
    console.log('Scroll Top:', scrollTop);
    const windowHeight = window.innerHeight;
  
    const threshold = windowHeight * 0.7; // Adjust as needed
    const maxZoomOut = 20; // Adjust as needed
  
    if (scrollTop >= 0 && scrollTop <= threshold) {
      const zoomPercentage = (scrollTop / threshold) * maxZoomOut;
      const backgroundSize = 100 + zoomPercentage;
      this.isZoomed = true;
      document.querySelector('.service-main-banner')!.setAttribute('style', `background-size: ${backgroundSize}%`);
    } else {
      this.isZoomed = false;
    }
  }
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollChangeCallback, true);
  }

}
