import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-youloop',
  templateUrl: './youloop.component.html',
  styleUrls: ['./youloop.component.scss']
})
export class YouloopComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('name'),
    email: new FormControl('email'),
  });

  userInput = new FormControl('hello');



  constructor() { }

  ngOnInit(): void {
  }

  showForm(){
    console.log(this.userForm)
  }

}
