import { Component } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'birthvenue';

emp:Employee = new Employee();
 onSubmit(){
debugger;
var emplist=[];
console.log(this.emp);
emplist.push(this.emp)
const blob = new Blob([JSON.stringify(emplist)], {type : 'application/json'});
saveAs(blob, 'data.json');

 }
  
}

class Employee {
  name:string;
age:number;
gender:string;
empId:string;
homenum:number;
pemail:string;
offnum:number;
offemail:string;
prestreet:string;
precity:string;
prestate:string;
precountry:string;
perstreet:string;
percity:string;
perstate:string;
percountry:string;
}
