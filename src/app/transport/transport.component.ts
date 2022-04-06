import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {

  trainData:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève')
    .subscribe(
      (value) => this.trainData = value
    )
    timer(1000, 100)
    .pipe(
      map(number => number % 6)
    )
    .subscribe(
      (number) => console.log(number)
    )
  }
  correspondance(){
    console.log("recherche de correspondance");
  }




}
