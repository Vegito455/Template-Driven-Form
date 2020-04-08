import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TestformService } from '../testform.service';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {
  topics = [ 'Angular','Wso2','API Manager','Life-Ray','Process-Maker'];

userModel = new User('','',1234567890,'','Morning',false);



  constructor(private testform : TestformService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userModel);
  }

  getdata(){
    console.log("getData called...");
    const payload ={
    name : ""
    };
  this.testform.getDatafromAPI(payload).subscribe((response:any)=>{
    console.log("Api response",response)
  })
  }


}
