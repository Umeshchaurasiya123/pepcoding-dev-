
// in javascipt function is also variable so we can pass function as parameters alos

function sayhi(name){
    console.log(name)
}

sayhi("umesh")

let arr=[10,20,30,40]
sayhi(arr)

let obj={
    hellp:"wrold",
    hi:"all"
}
sayhi(obj)

// function can also be pass as variable  in java script

function chotafunction(name)
{
    console.log("my name is "+name)
}
function sayhii(name){
    console.log(name);
    //now to call that function 
    name("umesh chaurasiya");
}

sayhii(chotafunction)

