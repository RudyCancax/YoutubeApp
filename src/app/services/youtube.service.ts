import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeRespuesta, Video } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtbeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey    = 'AIzaSyDH6lwxdXO9A-Y11xm8xMGQsYh8ZPLRclE';
  private playList  = 'UU36xmz34q02JYaZYKrMwXng';
  private nextPageToken = '';


  constructor( private http: HttpClient ) { }

  getVideos() {
    const url = `${ this.youtbeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '20')
      .set('playlistId', this.playList)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);

    return this.http.get<YoutubeRespuesta>(url, { params })
      .pipe(
        map(resp => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),

        map( items =>  items.map( video => video.snippet) )
      );
  }
}
