import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  author = 'Maximilian Barabas'
  group = 'Szoft II N'
  date = '2022. 04.20.'

  ngOnInit(): void { }

}
