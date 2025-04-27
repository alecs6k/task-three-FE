import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  public location: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  public ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.location = data['location'];
    });
  }

  public goBack(): void {
    this._router.navigate(['../'], { relativeTo: this._route });
  }
}
