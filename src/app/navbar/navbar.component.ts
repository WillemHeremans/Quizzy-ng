import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  point = 0;

  constructor( private globals: GlobalsService) { }

  ngOnInit() {
  }

}
