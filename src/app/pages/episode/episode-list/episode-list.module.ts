import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EpisodeListComponent} from "./episode-list.component";
import {RouterModule} from "@angular/router";
import {EpisodeListRoutingModule} from "./episode-list-routing.module";

@NgModule({
  declarations: [EpisodeListComponent],
  imports: [CommonModule, RouterModule, EpisodeListRoutingModule],
  exports: [EpisodeListComponent]
})
export class EpisodeListModule {}
