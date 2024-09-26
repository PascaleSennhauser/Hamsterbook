import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { FriendService } from '../../friend.service';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss'
})
export class AddCommentComponent {
  fs = inject(FriendService);
  @Output() dontShowAddComment = new EventEmitter<false>;
  @Input() posts: string[] = [];
  comment: string = '';


  /**
   * This method sends an event to the parent component, so the overlay to add a comment gets closed.
   */
  closeAddComment() {
    this.dontShowAddComment.emit(false);
  }


  /**
   * The form for adding a comment gets submitted.
   * The comment gets pushed to the existing comments and the overlay gets closed.
   * @param ngForm - The Angular form
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.posts.push(this.comment);
      this.comment = '';
      this.closeAddComment();
    }
  }
}
