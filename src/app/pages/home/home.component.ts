import { Component, OnInit } from '@angular/core';
// import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Arreglo tipo Video (Está en los modelos), se agreag para que typescript ayude
  videos: Video[] = [];

  // constructor( private youtubeService: YoutubeService ) { }
  constructor( ) { }

  ngOnInit(): void {
    // Al iniciar el proyecto carga los primeros 20 videos
    // this.cargarVideos();
  }




  // Muestra el video en el Pop Up, usando 'SweetAlert'

  // mostrarVideoPopUp( video: Video ) {
  //   console.log(video);

  //   Swal.fire({
  //     html: `
  //     <h4>${ video.title} </h4>
  //     <iframe
  //         width="100%"
  //         height="315"
  //         src="https://www.youtube.com/embed/${ video.resourceId.videoId }"
  //         frameborder="0"
  //         allow="accelerometer;
  //         autoplay;
  //         encrypted-media;
  //         gyroscope;
  //         picture-in-picture"
  //         allowfullscreen>
  //     </iframe>`
  //   });
  // }

  // Al hacer click en el botón Siguiente Página, carga 20 videos más

  // cargarVideos() {
  //   this.youtubeService.getVideos()
  //     .subscribe(respuesta => {
  //       this.videos.push( ...respuesta );
  //       console.log(respuesta);
  //     });
  // }

}
