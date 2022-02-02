
function fun(a,b){
    console.log(a+" "+b)
    console.log(arguments) // array like argument list
    let ans=Array.from(arguments) // converting to array
    console.log(ans)
    //now applying map
   let res= ans.map((x)=>x*x) // applyinhg arrow function in it
    console.log(res)

}


fun()
fun(10)
fun(10,20)
fun(10,20,30)

//----------------------------------------------------------------------

//output
//undefined undefined
//[Arguments] {}
//10 undefined
//[Arguments] { '0': 10 } // here it is not an array but array likr 
// here we can not apply .map .filtet
//10 20
//[Arguments] { '0': 10, '1': 20 }
//10 20
//[Arguments] { '0': 10, '1': 20, '2': 30 }