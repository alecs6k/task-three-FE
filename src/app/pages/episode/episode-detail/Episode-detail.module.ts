import {NgModule} from "@angular/core";
import {EpisodeDetailComponent} from "./episode-detail.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [EpisodeDetailComponent],
  imports: [CommonModule],
  exports: [EpisodeDetailComponent]
})
export class EpisodeDetailModule {}
