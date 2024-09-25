import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HamsterCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
