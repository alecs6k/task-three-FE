import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../../services/get-data.service";
import {RmCharacter} from "../../../interfaces/rm-character.interface";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters: RmCharacter[];

  constructor(private _getDataService: GetDataService, private _router: Router) {
    this.characters = [];
  }

  public ngOnInit(): void {
    this._getDataService
      .getCharacters()
      .pipe(
        tap(response => this.characters = response)
      )
      .subscribe();
  }

  public redirectToDetails(character: RmCharacter) {
    this._router.navigate(['/character-list/character', character.id]);
  }
}
