import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtbeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey    = 'AIzaSyDH6lwxdXO9A-Y11xm8xMGQsYh8ZPLRclE';
  private playList  = 'UU36xmz34q02JYaZYKrMwXng';
  private nextPageToken: string;


  constructor( private http: HttpClient ) { }

  getVideos() {
    const url = `${ this.youtbeUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '010')
      .set('playlistId', this.playList)
      .set('key', this.apiKey);

    return this.http.get(url, { params });
  }
}
