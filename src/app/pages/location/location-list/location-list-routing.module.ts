import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationListComponent} from "./location-list.component";
import {LocationResolver} from "../../../services/resolvers/location-resolver.service";
import {LocationDetailComponent} from "../location-detail/location-detail.component";

const routes: Routes = [
  { path: '', component: LocationListComponent },
  {
    path: 'location/:id',
    component: LocationDetailComponent,
    resolve: {
      location: LocationResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationListRoutingModule { }
