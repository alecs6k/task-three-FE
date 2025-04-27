import {NgModule} from "@angular/core";
import {CharacterDetailComponent} from "./character-detail.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule],
  exports: [CharacterDetailComponent]
})
export class CharacterDetailModule {}
