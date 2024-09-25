import { Component, inject } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friendbox',
  standalone: true,
  imports: [],
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.scss'
})
export class FriendboxComponent {
  fs = inject(FriendService);

}
