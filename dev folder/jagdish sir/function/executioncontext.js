/*
console.log("before Declearation 2",a)
var a;
console.log("after Decleration 4",a)
a=10;
console.log("After inicialization 6",a)

function fn()
 {
    console.log("Before declearation 8",a)
    var a;
    console.log(" After decleration 10",a)
    a=20;
    console.log("After inicialization 12",a)

}

fn();
*/
// output
/*
before Declearation 2 undefined
after Decleration 4 undefined
After inicialization 6 10
Before declearation 8 undefined
 After decleration 10 undefined
After inicialization 12 20
*/

// first function ko memory allocate hogi then variables ko a ko undefiend  ,
// later then global execution context sai execution start hoga 
//----------------------------------------------------------------------------------












