import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  email = new FormControl(null,[Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])
  message = new FormControl(null)
  name = new FormControl(null,[Validators.required])
  ngOnInit(): void {
  }

  submitForm() {
    if(this.email.invalid) {
      this.email.markAllAsTouched()
      return;
    } 
  }

}
