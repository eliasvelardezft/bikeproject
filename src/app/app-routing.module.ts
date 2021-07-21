import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

const routes: Routes = [
  {
    //localhost:4200/home
    path: 'home',
    component: HomeComponent
  },
  {
    //enviamos parametro por la ruta
    //localhost:4200/admin/view${id}
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },
  {
    //localhost:4200/admin
    path: 'admin',
    component: AdminComponent
  },
  {
    //localhost:4200/galeria
    path: 'galeria',
    component: ImageGalleryComponent
  },
  //localhost:4200/image/${id}
  {
    path: 'image/:id',
    component: ImageDetailsComponent
  }
  ,
  {
    path: 'about',
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
