import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  public episode: any;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  public ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.episode = data['episode'];
    });
  }

  public goBack(): void {
    this._router.navigate(['../'], { relativeTo: this._route });
  }
}
