import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RmCharacter} from "../interfaces/rm-character.interface";
import {RmLocation} from "../interfaces/rm-location.interface";
import {RmEpisode} from "../interfaces/rm-episode.interface";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private readonly _BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private _http: HttpClient) { }

  public getCharacters(): Observable<RmCharacter[]> {
    return this._http
      .get<any>(this._BASE_URL + '/character')
      .pipe(
        map((response) => response.results.map((character: RmCharacter) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image
        })))
      );
  }

  public getLocations(): Observable<RmLocation[]> {
    return this._http
      .get<any>(this._BASE_URL + '/location')
      .pipe(
        map((response) => response.results.map((location: RmLocation) => ({
          id: location.id,
          name: location.name,
          type: location.type,
          dimension: location.dimension
        })))
      );
  }

  public getEpisodes(): Observable<RmEpisode[]> {
    return this._http
      .get<any>(this._BASE_URL + '/episode')
      .pipe(
        map((response) => response.results.map((episode: RmEpisode) => ({
          id: episode.id,
          name: episode.name,
          air_date: episode.air_date,
          episode: episode.episode
        })))
      );
  }
}
