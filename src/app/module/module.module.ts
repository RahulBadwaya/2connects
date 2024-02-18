import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VisionComponent } from './components/vision/vision.component';
import { ContactComponent } from './components/contact/contact.component'
import { ReactiveFormsModule } from '@angular/forms';
const routes : Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'services',
    component : ServicesComponent
  },
  {
    path : 'vision',
    component : VisionComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  }
]


@NgModule({
  declarations: [HomeComponent,AboutComponent,ServicesComponent, VisionComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ModuleModule { }
