import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
      img: 'assets/img/hamster/hamster-1.jpg',
      posts: ['Hallo, mein Name ist Felix. Ich bin hier, um neue Freunde zu treffen!', 'Hallo Felix.']
    };
  heartIsRed = false;
  showAddComment = false;


  /**
   * The color of the heart gets toggled.
   * It's red, when the post gets a like or black, when there is no like.
   */
  toggleColor() {
    this.heartIsRed = !this.heartIsRed;
  }


  /**
   * This method sets the variable showAddComment to true, so you can add a comment.
   */
  openAddComment() {
    this.showAddComment = true;
  }


  /**
   * This method processes the event from the child-component, which is false and sets the variable showAddComment according to it.
   * @param event - The emitted event.
   */
  closeAddComment(event: boolean) {
    this.showAddComment = event;
  }
}
