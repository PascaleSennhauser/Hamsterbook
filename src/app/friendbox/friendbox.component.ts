import { Component } from '@angular/core';

@Component({
  selector: 'app-friendbox',
  standalone: true,
  imports: [],
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.scss'
})
export class FriendboxComponent {
  friends: any = [
    {
      name: 'Lea',
      img: 'assets/img/hamster/hamster-2.jpg'
    },
    {
      name: 'Tom',
      img: 'assets/img/hamster/hamster-4.jpg'
    }
  ]

}
