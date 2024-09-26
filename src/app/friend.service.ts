import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  friends: any = [
    {
      name: 'Tim',
      img: 'assets/img/hamster/hamster-2.jpg'
    },
    {
      name: 'Tom',
      img: 'assets/img/hamster/hamster-3.jpg'
    },
    {
      name: 'Maya',
      img: 'assets/img/hamster/hamster-4.jpg'
    }
  ];
  proposals: any = [
    {
      name: 'Leo',
      age: '1 Jahr alt',
      img: 'assets/img/hamster/hamster-5.jpg'
    },
    {
      name: 'Pia',
      age: '2 Jahre alt',
      img: 'assets/img/hamster/hamster-6.jpg'
    },
    {
      name: 'Leonie',
      age: '1.5 Jahre alt',
      img: 'assets/img/hamster/hamster-7.jpg'
    },
    {
      name: 'Thomas',
      age: '3 Jahre alt',
      img: 'assets/img/hamster/hamster-1.jpg'
    },
    {
      name: 'Selina',
      age: '1.5 Jahre alt',
      img: 'assets/img/hamster/hamster-3.jpg'
    },
    {
      name: 'Bianca',
      age: '1 Jahre alt',
      img: 'assets/img/hamster/hamster-4.jpg'
    },
    {
      name: 'Theo',
      age: '2.5 Jahre alt',
      img: 'assets/img/hamster/hamster-2.jpg'
    },
    {
      name: 'Markus',
      age: '3 Jahre alt',
      img: 'assets/img/hamster/hamster-1.jpg'
    }
  ];
  hamsterPosts = [
    {
      img: 'assets/img/hamster/hamster-1.jpg',
      posts: ['Hallo, mein Name ist Felix. Ich bin hier, um neue Freunde zu treffen!', 'Hallo Felix.']
    },
    {
      img: 'assets/img/hamster/hamster-2.jpg',
      posts: ['Hallo zusammen. Freut mich, dass ihr hier seid.']
    },
    {
      img: 'assets/img/hamster/hamster-3.jpg',
      posts: ['Hey, ich esse gerne Körner.']
    },
    {
      img: 'assets/img/hamster/hamster-4.jpg',
      posts: ['Hello, my name is Maya.']
    }
  ];


  constructor() { }

  
  /**
   * This method adds a new friend and deletes the friend from the proposal list.
   * @param name - The name of the friend.
   * @param img - The img of the friend.
   * @param index - The index to delete the selected friend from the proposals.
   */
  addFriend(name: string, img: string, index: number) {
    let newFriend = {
      name: name,
      img: img,
    }
    this.friends.push(newFriend);
    this.proposals.splice(index, 1);
  }

}
