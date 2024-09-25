import { Component, inject } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [ ProfileRowComponent ],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {
  pr = inject(FriendService);
  profile: any =     {
    name: 'Felix',
    age: '1 Jahr alt',
    img: 'assets/img/hamster/hamster-1.jpg'
  };

}
