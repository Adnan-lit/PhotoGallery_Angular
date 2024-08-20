import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../services.service';
import { PreviewBoardComponent } from '../preview-board/preview-board.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  term: string = '';

  imageService = inject(ServicesService);

  previewBoard = inject(PreviewBoardComponent);

  search() {
    this.imageService.searchImages(this.term).subscribe((response: any) => {
      this.previewBoard.images = response.hits;
    });

  }

  reload() {
    this.term = '';
    this.imageService.getImages().subscribe((response: any) => {
      this.previewBoard.images = response.hits;
    });
  }


}
