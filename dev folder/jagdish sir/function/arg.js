/*
function fb(param1, param2) {
    console.log("inside function",param1,param2)
    
}
fb("hello","hi")
fb()
fb("hello ","hi","bye","bye")

//inside function hello hi
//inside function undefined undefined
//inside function hello  hi

*/

function apnafunction (param1,param2) {
        console.log(arguments);
        console.log(param1,param2)    
}

apnafunction("hello ","hi")
apnafunction("hello")
apnafunction()

/*
//here basically argument array is created then it is copy to parameters 
[Arguments] { '0': 'hello ', '1': 'hi' }
hello  hi
[Arguments] { '0': 'hello' }
hello undefined
[Arguments] {}
undefined undefined
*/



