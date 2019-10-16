import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  settings = {
    delete: {
      confirmDelete: false,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    
    columns: {
      empId: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      age: {
        title: 'Age',
      },
      gender: {
        title: 'Gender',
      },
    },
  };

  data ;

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }

  title = 'birthvenue';

emp:Employee = new Employee();
 onSubmit(){
debugger;
var emplist=[];
console.log(this.emp);
emplist.push(this.emp)
const blob = new Blob([JSON.stringify(emplist)], {type : 'application/json'});
saveAs(blob, './assets/data.json');

 }
  

 constructor(private http:HttpClient){
   this.http.get('./assets/data.json').subscribe(data=>{
      this.data = data;
   })
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
