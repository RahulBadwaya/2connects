import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { SpinnerService } from 'src/app/services/spinner.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private spinner : NgxSpinnerService,
    private toast : ToastrService,
    private contactService : ContactService,
    private fb : FormBuilder) { }
    contactForm!:FormGroup;
  workEmail:FormControl = new FormControl(null, [Validators.required,Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])
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
  hireNow() {
    if(this.workEmail.invalid) {
      this.workEmail.markAllAsTouched();
      this.workEmail.markAsDirty()
      return;
    }
    this.spinner.show()
    const payload = {
      service_id : 'service_hu1jibi',
      template_id : 'template_wp2d39r',
      user_id : 'GEiuUsJTME2J2e_lx',
      template_params : {
        workEmail : this.workEmail.value
      },
      accessToken : 'wuOtKj_LRbahXuVdMsEPx'
    }
    this.contactService.sendInquiry(payload).subscribe({
      next : (response)=>{
        this.spinner.hide();
        this.workEmail.reset()
        this.toast.success('Hiring inquiry is sent successfully')
        console.log(response)
      },
      error : (error)=>{
        this.spinner.hide()
        this.workEmail.reset()
        this.toast.success('Hiring inquiry is sent successfully')
      }
    })
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

}
