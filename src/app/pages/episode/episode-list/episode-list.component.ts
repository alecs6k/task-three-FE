import {Component, OnInit} from '@angular/core';
import {RmEpisode} from "../../../interfaces/rm-episode.interface";
import {GetDataService} from "../../../services/get-data.service";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  public episodes: RmEpisode[];

  constructor(private _getDataService: GetDataService, private _router: Router) {
    this.episodes = [];
  }

  public ngOnInit(): void {
    this._getDataService
      .getEpisodes()
      .pipe(
        tap(response => this.episodes = response)
      )
      .subscribe();
  }

  public redirectToDetails(episode: RmEpisode) {
    this._router.navigate(['/episode-list/episode', episode.id]);
  }
}
