import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewBoardComponent } from "./preview-board/preview-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PreviewBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PhotoGallery';


}
