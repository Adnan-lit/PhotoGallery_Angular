import { Component, inject, OnInit, output } from '@angular/core';
import { ServicesService } from '../services.service';
import { ImageCardComponent } from "../image-card/image-card.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview-board',
  standalone: true,
  imports: [ImageCardComponent, SearchBarComponent,FormsModule],
  templateUrl: './preview-board.component.html',
  styleUrl: './preview-board.component.css'
})
export class PreviewBoardComponent implements OnInit {
  
  images: any[] = [];
  imageService = inject(ServicesService);
  selectedImage = {
            "id": 0,
            "pageURL": "",
            "type": "",
            "tags": "",
            "previewURL": "",
            "previewWidth": 0,
            "previewHeight": 0,
            "webformatURL": "",
            "webformatWidth": 0,
            "webformatHeight": 0,
            "largeImageURL": "",
            "imageWidth": 0,
            "imageHeight": 0,
            "imageSize": 0,
            "views": 0,
            "downloads": 0,
            "collections": 0,
            "likes": 0,
            "comments": 0,
            "user_id": 0,
            "user": "",
            "userImageURL": ""
  };
  
  
  ngOnInit(): void {
    this.search();
    console.log(this.images);
    
  }

  search() {
    this.imageService.getImages().subscribe(
      (response: any) => {
        this.images = response.hits;
      }
    );
  }


  openModal(image: any) {
    this.selectedImage = image;
    const modal = document.getElementById('imageModal');
    console.log(this.selectedImage);
    
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }



}
