import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
  constructor(
    private fb : FormBuilder, 
    private spinner : NgxSpinnerService,
    private toast : ToastrService,
    private contactService : ContactService) { }
  isZoomed: boolean = false;
  isBlackBackground: boolean = false;
  contactForm!:FormGroup;

  private scrollChangeCallback!: () => void;
  currentPosition: any;
  startPosition!: number;
  ngOnInit(): void {
    AOS.init({
      duration:1500,
      delay:300,
    })  
    this.loadContactForm()
  }
  loadContactForm() {
    this.contactForm = this.fb.group({
      name : [null, [Validators.required]],
      email : [null, [Validators.required,Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
      number : [null, [Validators.required, Validators.min(1000000000)]],
      message : [null]
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
  
  
  sendQuery() {
    if(this.contactForm.invalid) {
      this.contactForm.markAllAsTouched()
      this.contactForm.markAsDirty()
      return;
    }
    this.spinner.show()
    const payload = {
      service_id : 'service_hu1jibi',
      template_id : 'template_efjopwk',
      user_id : 'GEiuUsJTME2J2e_lx',
      template_params : {
        name : this.contactForm.value.name,
        email : this.contactForm.value.email,
        number : this.contactForm.value.number,
        message : this.contactForm.value.message
      },
      accessToken : 'wuOtKj_LRbahXuVdMsEPx'
    }
    this.contactService.sendInquiry(payload).subscribe({
      next : (response)=>{
        this.spinner.hide();
        this.contactForm.reset()
        this.toast.success('Inquiry is sent successfully')
        console.log(response)
      },
      error : (error)=>{
        this.spinner.hide()
        this.contactForm.reset()
        this.toast.success('Inquiry is sent successfully')
      }
    })
  }
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollChangeCallback, true);
  }
}
