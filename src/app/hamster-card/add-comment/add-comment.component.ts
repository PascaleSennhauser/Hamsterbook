import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
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

  closeAddComment() {
    this.dontShowAddComment.emit(false);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.posts.push(this.comment);
      this.comment = '';
      this.closeAddComment();
    }
  }
}
