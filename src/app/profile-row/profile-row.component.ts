import { Component, inject, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() proposal: any = 
  {
    name: 'Felix',
    age: '1 Jahr alt',
    img: 'assets/img/hamster/hamster-1.jpg'
  };
  @Input() index:number = 0;
  @Input() follow: boolean = true;
  fs = inject(FriendService);
}
