import { Component, inject } from '@angular/core';
import { FriendService } from '../friend.service';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { ProfileRowMobileComponent } from "../profile-row-mobile/profile-row-mobile.component";

@Component({
  selector: 'app-proposal-mobile',
  standalone: true,
  imports: [ProfileRowComponent, ProfileRowMobileComponent],
  templateUrl: './proposal-mobile.component.html',
  styleUrl: './proposal-mobile.component.scss'
})
export class ProposalMobileComponent {
  pr = inject(FriendService);
  profile: any = {
    name: 'Felix',
    age: '1 Jahr alt',
    img: 'assets/img/hamster/hamster-1.jpg'
  };
}
