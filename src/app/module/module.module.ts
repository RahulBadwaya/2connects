import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VisionComponent } from './components/vision/vision.component'
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
  }
]


@NgModule({
  declarations: [HomeComponent,AboutComponent,ServicesComponent, VisionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ModuleModule { }
