import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character: any;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  public ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.character = data['character'];
    });
  }

  public goBack(): void {
    this._router.navigate(['../'], { relativeTo: this._route });
  }
}
