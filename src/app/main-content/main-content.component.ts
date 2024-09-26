import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FriendboxComponent } from '../friendbox/friendbox.component';
import { HamsterCardComponent } from '../hamster-card/hamster-card.component';
import { ProposalsComponent } from '../proposals/proposals.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, FriendboxComponent, HamsterCardComponent, ProposalsComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  hamsterPosts = [
    {
      text: 'Hallo, mein Name ist Felix. Ich bin hier, um neue Freunde zu treffen!',
      img: 'assets/img/hamster/hamster-1.jpg'
    },
    {
      text: 'Hallo zusammen. Freut mich, dass ihr hier seid.',
      img: 'assets/img/hamster/hamster-2.jpg'
    },
    {
      text: 'Hey, ich esse gerne Körner.',
      img: 'assets/img/hamster/hamster-3.jpg'
    },
    {
      text: 'Hello, my name is Maya.',
      img: 'assets/img/hamster/hamster-4.jpg'
    }
  ];


  buttonClicked() {
    alert('Hallo, wie geht es dir?');
  }
}
