import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './control/room/room.component';
import { ControlComponent } from './control/control/control.component';


const routes: Routes = [
  { path: 'control', component: ControlComponent },
  { path: 'camera', loadChildren: () => import('./camera/camera.module').then(m => m.CameraModule) },
  { path: '', redirectTo: 'control', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
