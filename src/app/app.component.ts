import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";
import { ProposalsComponent } from "./proposals/proposals.component";
import { ProfileRowComponent } from "./profile-row/profile-row.component";
import { FriendboxComponent } from "./friendbox/friendbox.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HamsterCardComponent, ProposalsComponent, ProfileRowComponent, FriendboxComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
