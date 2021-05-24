import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title="STACK";
  array:any=[];
  top=-1;
  print="";
  constructor() { }

  //Printer
  printer(data:any){
    this.print=data;
  }
  //Clear screen
  clear(){
    this.print="";
  }

  //Push
  push(num:any) {
    if(this.top>=9){
      this.printer("Stack Overflow");
    }else{
      if(num=="")
      {
        this.printer("Insert a value");
      }else{
      this.top++;
      this.array[this.top]=num;
      this.printer(num+" has pushed into the stack");
      }
    } 
  }

  //Display
  display(){
    this.printer(this.array);
  }

  //Pop
  pop(){
    let dData;
    if(this.top<=-1){
      this.printer("Stack Underflow");
    }else{
      dData=this.array.splice(this.top,1);
      this.top--;
      this.printer(dData+" has been deleted from the stack")
    }
  }

  //Peek
  peek(){
    this.printer(this.array[this.top]);
  }

  

  ngOnInit(): void {
  }

}
