/*
let obj={
    fun : function(){
        console.log(" hi i am fun ")
    },
    name: "summit malik",
    age:34
}

console.log(obj)
obj.fun()
console.log(obj.age)
console.log(obj.name)
*/


let obj={
    fun1 : function(){
        console.log(" hi i am fun1 first name is  "+this.fname+" age is "+this.age+" ")
    },
    fun2 : function(){
        console.log(" hi i am fun2 first name is  "+obj.fname+" age is "+obj.age+" ")
    },
    fun3 : function(){
        console.log(" hi i am fun3 first name is  "+fname+" age is "+age+" ")
    },

    fname: "summit malik",
    age:34
}
obj.fun1()
obj.fun2()
obj.fun3()
// output  hi i am fun1 first name is  summit malik age is 34 
// hi i am fun2 first name is  summit malik age is 34 
// error for fun3() is fname is not defined

// executin 
// here fun1  fun 2 fun 3 are inside obj so that are *not* allocated memory first

// at run time suppose obj allocate 10k
// then inside obj first function definition and variable get hosting that is memeory allocation 
// so fname ="sumit malik "
// age=34 
// then fun1() 
// then fun2()
// then fun3() 
 
// now at run time 
// obj at bottom of stack 
// then fun1() is called and here this represent obj sp this(obj).fname and this.age is get 
// now fun1() is pop out and fun2() is called 
//fun2() execute but but remember obj is still in stack os obj.fname gives name and obj.age gives age 
// now fun2() is pop out now fun3() is push and here fname is seach ans it not found beacuse to acees element of object we neet to specify objecname. key 
  