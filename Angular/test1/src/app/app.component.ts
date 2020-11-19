import {Component} from "@angular/core";


export interface Card{
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  show = true

  cards: Card[] = [
    {title: 'Card1', text: 'card 1 text'},
    {title: 'Card2', text: 'card 2 text'},
    {title: 'Card3', text: 'card 3 text'},
  ]

  toggleShow(): void{
    this.show = !this.show
  }

}
