import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clientList = [
    {clientId: 11, fname: "abc", lname: "abcc"},
    {clientId: 12, fname: "bcd", lname: "bcdd"},
    {clientId: 13, fname: "cde", lname: "cdee"},
    {clientId: 14, fname: "def", lname: "deff"},
    {clientId: 15, fname: "efg", lname: "efgg"},
    {clientId: 16, fname: "fgh", lname: "fghh"}
  ];
}
