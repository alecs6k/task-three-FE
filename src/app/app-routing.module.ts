import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'character-list',
    loadChildren: () => import('./pages/character/character-list/character-list.module').then(m => m.CharacterListModule)
  },
  {
    path: 'episode-list',
    loadChildren: () => import('./pages/episode/episode-list/episode-list.module').then(m => m.EpisodeListModule)
  },
  {
    path: 'location-list',
    loadChildren: () => import('./pages/location/location-list/location-list.module').then(m => m.LocationListModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
