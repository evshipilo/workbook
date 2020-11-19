import {Component, Input, OnInit} from '@angular/core'
import {Card} from '../app.component';

enum btnState{
  disabled= 'disabled',
  enabled= 'enabled'
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() card: Card
  @Input() index: number

  title = 'Card title'
  btnState = btnState.enabled
  isDisabled = false
  num = 42
  color = 'red'
  date = new Date()

  ngOnInit(): void {
    setTimeout(() => {
      this.card.title = 'New card title'
      this.btnState = btnState.disabled
      this.isDisabled = true
    }, 2000)
  }

  changeTitle(): void{
    this.card.title = 'Changed title'
  }

  onChange(event): void{
    this.card.title = event.target.value
  }

  onChangeNew(value): void{
    this.card.title = value
  }

  onModelChange(): void{
    console.log(this.card.title)
  }

}
