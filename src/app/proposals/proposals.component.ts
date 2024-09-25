import { Component } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [ ProfileRowComponent ],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {
  profile: any =     {
    name: 'Felix',
    age: '1 Jahr alt',
    img: 'assets/img/hamster/hamster-1.jpg'
  };
  proposals: any = [
    {
      name: 'Tim',
      age: '1 Jahr alt',
      img: 'assets/img/hamster/hamster-2.jpg'
    },
    {
      name: 'Ben',
      age: '2 Jahre alt',
      img: 'assets/img/hamster/hamster-3.jpg'
    },
    {
      name: 'Maya',
      age: '1.5 Jahre alt',
      img: 'assets/img/hamster/hamster-4.jpg'
    }
  ]
}
