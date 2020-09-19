import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // Utilizamos HttpClient para usar el método GET
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

  // Función que solicita a la API de google la información y la obtiene en formato Json
  getVideos() {
    const url = `${ this.youtbeUrl}/playlistItems`;

    const params = new HttpParams() // Parámetro de solicitud a la API
      .set('part', 'snippet')       // Solicitud tipo snippet
      .set('maxResults', '20')      // Nos devuelva la cantidad indicada de datos
      .set('playlistId', this.playList)  // Tipo de solicitud 
      .set('key', this.apiKey)      // Enviamos la API KEY que google nos generó y dió
      .set('pageToken', this.nextPageToken);  // Enviamos el token de la siguiente página

    return this.http.get<YoutubeRespuesta>(url, { params })  // La función devuelve un objeto de tipo YoutubeRespuesta el cual puede verse en los modelos
      .pipe(                        // Funciona una cantidad de funciones de rxjs
        map(resp => {              // Map realiza operación matemática
          this.nextPageToken = resp.nextPageToken; // Enviamos el nuevo token de la siguiente página obtenida
          return resp.items;       // Devolvemos los datos obtenidos
        }),

        map( items =>  items.map( video => video.snippet) ) // se realiza un nuevo filtrado
      );
  }
}
