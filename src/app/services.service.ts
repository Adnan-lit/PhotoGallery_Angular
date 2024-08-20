// import { HttpClient } from '@angular/common/http';
// import { Inject, Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServicesService {

//   http = Inject(HttpClient);

//   getPhotos() {
//     return this.http.get('https://pixabay.com/api/?key=43209598-e224d0f7690d298be1f33ef9d&q=${term}&image_type=photo&pretty=true');
//   }
// }


import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // private apiKey = '43209598-e224d0f7690d298be1f33ef9d';
  // private apiUrl = 'https://pixabay.com/api/';

  private searchTermsList = ['nature', 'city', 'animals', 'technology', 'abstract'];

  private randomTerm = this.searchTermsList[Math.floor(Math.random() * this.searchTermsList.length)];

  http = inject(HttpClient);

  getImages(){
    return this.http.get(`https://pixabay.com/api/?key=43209598-e224d0f7690d298be1f33ef9d&q=${this.randomTerm}&safesearch=true&pretty=true`);
  }

  searchImages(term: string) {
    return this.http.get(`https://pixabay.com/api/?key=43209598-e224d0f7690d298be1f33ef9d&q=${term}&image_type=all&pretty=true`);
  }
}
