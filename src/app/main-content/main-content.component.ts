import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FriendboxComponent } from '../friendbox/friendbox.component';
import { HamsterCardComponent } from '../hamster-card/hamster-card.component';
import { ProposalsComponent } from '../proposals/proposals.component';
import { FooterComponent } from '../footer/footer.component';
import { FriendService } from '../friend.service';
import { ProposalMobileComponent } from "../proposal-mobile/proposal-mobile.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, FriendboxComponent, HamsterCardComponent, ProposalsComponent, FooterComponent, ProposalMobileComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  fs = inject(FriendService);
}
