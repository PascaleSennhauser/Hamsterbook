import { Component, Input, inject } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row-mobile',
  standalone: true,
  imports: [],
  templateUrl: './profile-row-mobile.component.html',
  styleUrl: './profile-row-mobile.component.scss'
})
export class ProfileRowMobileComponent {
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
