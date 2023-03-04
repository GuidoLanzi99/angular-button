import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-click',
  templateUrl: './btn-click.component.html',
  styleUrls: ['./btn-click.component.css']
})
export class BtnClickComponent {
  @Input() content = "";
  @Input() onClickDisable = false;
  clicked = false;

  click(): void {
    this.clicked = this.onClickDisable
  }
}
