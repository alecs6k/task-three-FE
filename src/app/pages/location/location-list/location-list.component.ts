import { Component, OnInit } from '@angular/core';
import {RmLocation} from "../../../interfaces/rm-location.interface";
import {GetDataService} from "../../../services/get-data.service";
import {tap} from "rxjs/operators";
import {RmEpisode} from "../../../interfaces/rm-episode.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  public locations: RmLocation[];

  constructor(private _getDataService: GetDataService, private _router: Router) {
    this.locations = [];
  }

  public ngOnInit(): void {
    this._getDataService
      .getLocations()
      .pipe(
        tap(response => this.locations = response)
      )
      .subscribe();
  }

  public redirectToDetails(location: RmLocation) {
    this._router.navigate(['/location-list/location', location.id]);
  }
}
