 // function decleration
/*
 fun();

 function fun(){
     gun()
 }
 
 function gun(){
     console.log(" I am inside gun")
 }
 */
// output  i am inside gun
// here first meneory allocated to function definitaion in heap then any variablr if any 
// then execution start from top to bottom 
// so here memory allocated to fun and gun function then fun() is called and fun get 
// excutes and later gun() funtion is executes
//--------------------------------------------------------------------------
/*
 function fun(){
     gun()
 }
fun() 
 function gun(){
     console.log(" I am inside gun")
 }
 //  output I am inside gun
 */

 function fun(){
     gun()
 }
 
 function gun(){
     console.log(" I am inside gun")
 }

 fun()
// output  I am inside gun function 
