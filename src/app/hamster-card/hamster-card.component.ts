import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from "./add-comment/add-comment.component";

@Component({
  selector: 'app-hamster-card',
  standalone: true,
  imports: [MatIconModule, CommonModule, AddCommentComponent],
  templateUrl: './hamster-card.component.html',
  styleUrl: './hamster-card.component.scss'
})
export class HamsterCardComponent {
  @Input() post: any = 
  {
    text: 'Hallo, mein Name ist Felix. Ich bin hier, um neue Freunde zu treffen!',
    img: 'assets/img/hamster/hamster-1.jpg'
  };
  heartIsRed = false;
  showAddComment = false;

  toggleColor() {
    if (!this.heartIsRed) {
      this.heartIsRed = true;
    } else {
      this.heartIsRed = false;
    }
  }

  openAddComment() {
    this.showAddComment = true;
  }

  closeAddComment(event: boolean) {
    this.showAddComment = event;
  }
}
