import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor() { }
  faqs = [
    {
      question : 'How is 2Connects a right choice for your development services?',
      ans : ' 2Connects is the right choice for development services due to our strong catch on the industrial trends, tailoring expertise, 100% trust and reliability benefits, and commitment to delivering high-quality solutions tailored to your needs.',
      open : false
    },
    {
      question : 'What is the process of hiring a team of developers at 2Connects?',
      ans : 'Hiring a team of developers at 2Connects involves a streamlined process where we:',
      list : ['Assess your requirements','Assemble a team of skilled professionals, and','Ensure clear communication and project alignment throughout.'],
      open : false
    },
    {
      question : 'How does 2Connect ensure the transparency, security and integrity of its developers and workflow?',
      ans : 'At 2Connects, we ensure transparency, security, and integrity through stringent vetting processes, secure communication channels, and adherence to industry best practices and standards.',
      open : false
    },
    {
      question : 'What if my experience with the developers of 2Connects isn’t satisfactory?',
      ans : "If your experience with our developers isn't satisfactory, we provide avenues for feedback and swift resolution, including replacing team members if necessary, to ensure your project's success.",
      open : false
    },
    {
      question : 'Is it possible to hire web developers and app developers from 2Connects in a week?',
      ans : "Yes, it's possible to hire web and app developers from 2Connects within a week, thanks to our extensive talent pool and efficient onboarding processes.",
      open : false
    },
    {
      question : 'How do you ensure the collaboration between 2Connects and clients is smooth?',
      ans : '2Connects fosters smooth collaboration through regular communication, project updates, and dedicated project managers who facilitate seamless interaction and ensure alignment between our team and yours.',
      open : false
    }
  ]
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
