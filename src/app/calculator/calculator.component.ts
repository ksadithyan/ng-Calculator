import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value1:string=""
  value2:string=""
  operator:string=''
  result:string=""
  equal:boolean=false

  
  constructor() { }

  ngOnInit(): void {
  }
  setOp(opr)
  {
    console.log(opr)
    this.operator=opr
  
  }

  setVal(i)
  {
    if(this.operator=="")
     { this.equal=false
       if(i=="0"||i=="1"||i=="2"||i=="3"||i=="4"||i=="5"||i=="6"||i=="7"||i=="8"||i=="9")
      { 
        this.value1=this.value1+i
      }
       else if(i=="+" ||i=="-"||i=="*"||i=="/")
      { this.setOp(i)}

       else if (i=="c")
      {
        this.equal=false
        this.value1=this.value2=""
        this.operator=""
        this.result=""

      }
       else // it will be =
        {
          
        }
     }
    else
     { this.equal=false
      if(i=="0"||i=="1"||i=="2"||i=="3"||i=="4"||i=="5"||i=="6"||i=="7"||i=="8"||i=="9")
      { 
        this.value2=this.value2+i
      }
      else if(i=="+" ||i=="-"||i=="*"||i=="/")
      { 

      }

       else if (i=="c")
      {
        this.equal=false
        this.value1=this.value2=""
        this.operator=""
        this.result=""
      }
       else // it will be =
        { this.equal=true
          if(this.operator=="+")
          {
            this.result=(parseInt(this.value1)+parseInt(this.value2)).toString()
          }
          else if(this.operator=="-")
          {
            this.result=(parseInt(this.value1)-parseInt(this.value2)).toString()
          }
          else if(this.operator=="*")
          {
            this.result=(parseInt(this.value1)*parseInt(this.value2)).toString()
          }
          else if(this.operator=="/")
          { if(parseInt(this.value2)!=0)
            this.result=(parseInt(this.value1)/parseInt(this.value2)).toString()
            else
            this.result="error"
          }

          this.operator=""
          this.value1=this.value2=""
        }
     }
  }

    
  

  
 

}
