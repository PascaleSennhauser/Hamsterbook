import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  standalone: true,
  imports: [],
  templateUrl: './hamster-card.component.html',
  styleUrl: './hamster-card.component.scss'
})
export class HamsterCardComponent {
  @Input() post: any = 
  {
    text: 'Hallo, mein Name ist Felix. Ich bin hier, um neue Freunde zu treffen!',
    img: 'assets/img/hamster/hamster-1.jpg'
  };
}
