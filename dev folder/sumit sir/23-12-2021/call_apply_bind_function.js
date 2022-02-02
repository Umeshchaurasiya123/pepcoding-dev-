
let obj={
    fun:function(name1,name2){
       console.log("hi myself "+this.fname+" my age is="+this.age)
       console.log(" i am calling hi to "+name1)
       console.log(" i am calling hi to "+name2)
       console.log(arguments); 
    },
    
    fname:"sumit malik",
    age:34
}

// normal function calling 
//obj.fun("vinay","rinku")
// here this is act as default obj
//----------------------------------------------------------------------------------
let obj2={
    fname:"sumit malik",
    age: 35
}
//-------------------------------------------------------------------------------
// call()
obj.fun.call(obj2,"binay","yasir")
//  here call is function it is available in all the function it can be uesd to call the function
// the use case is if you wants to override default this
// so basically call is use to override the default this , here we are explicitly passing deffent object 

//----------------------------------------------------------------------------
// apply()

obj.fun.apply(obj2,["binay","yasir","abcd"])
//  
//hi myself sumit malik my age is=35
//i am calling hi to binay
//i am calling hi to yasir
//------------------------------------------------------------------------------

// bind ()

let bf=obj.fun.bind(obj2,"yasir","binay")
bf()

// bind is dissimilaar to call and apply 
// it store the called function in variable and can be use to call it anywhere you wants
