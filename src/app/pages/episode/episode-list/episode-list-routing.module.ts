import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpisodeListComponent} from "./episode-list.component";
import {EpisodeDetailComponent} from "../episode-detail/episode-detail.component";
import {EpisodeResolver} from "../../../services/resolvers/episode-resolver.service";

const routes: Routes = [
  { path: '', component: EpisodeListComponent },
  {
    path: 'episode/:id',
    component: EpisodeDetailComponent,
    resolve: {
      episode: EpisodeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeListRoutingModule { }
