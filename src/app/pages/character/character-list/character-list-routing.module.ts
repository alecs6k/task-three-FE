import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterListComponent} from "./character-list.component";
import {CharacterDetailComponent} from "../character-detail/character-detail.component";
import {CharacterResolver} from "../../../services/resolvers/character-resolver.service";

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
    resolve: {
      character: CharacterResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListRoutingModule { }
