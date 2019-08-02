import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements OnInit {

  @Input() nickname: string;
  @Input() message: string;
  @Input() background: string;
  constructor() { }

  ngOnInit() {}

}
