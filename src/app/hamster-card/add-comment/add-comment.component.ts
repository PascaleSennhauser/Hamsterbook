import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss'
})
export class AddCommentComponent {
  @Output() dontShowAddComment = new EventEmitter<false>;
  closeAddComment() {
    this.dontShowAddComment.emit(false);
  }
}
