import {NgModule, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterListComponent} from "./character-list.component";
import {RouterModule} from "@angular/router";
import {CharacterListRoutingModule} from "./character-list-routing.module";

@NgModule({
  declarations: [CharacterListComponent],
  imports: [CommonModule, RouterModule, CharacterListRoutingModule],
  exports: [CharacterListComponent]
})
export class CharacterListModule implements OnInit {

  constructor() {

  }

  public ngOnInit(): void {
  }
}
