import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LocationListComponent} from "./location-list.component";
import {RouterModule} from "@angular/router";
import {LocationListRoutingModule} from "./location-list-routing.module";

@NgModule({
  declarations: [LocationListComponent],
  imports: [CommonModule, RouterModule, LocationListRoutingModule],
  exports: [LocationListComponent]
})
export class LocationListModule {}
