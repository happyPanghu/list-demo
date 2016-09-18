/**
 * apply
 */
function Parent(firstname)  
{  
    this.fname=firstname;  
    this.age=40;  
    this.sayAge=function()  
    {  
        console.log(this.age);  
    }  
}  
function Child(firstname)  
{  
  
    this.saySomeThing=function()  
    {  
        console.log(this.fname);  
        this.sayAge();
    }  
    this.getName=function()  
    {  
        return firstname;  
    }  
  
}  
var child=new Child("张");  
Parent.apply(child,[child.getName()]);  
child.saySomeThing();  