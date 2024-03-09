import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }
  sendInquiry(payload:any) {
    return this.http.post('https://api.emailjs.com/api/v1.0/email/send', payload)
  }
}
