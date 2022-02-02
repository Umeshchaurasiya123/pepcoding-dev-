
/*
(function(){
    let username=prompt("enter your user name")
    alert("HI  "+username)
})() 
*/
let time = prompt(" Enter count in secount")
let intervel= prompt(" enter the time enterval in secounds ")
///let copy=time;
// here comes the concept of funcion as object 
// here handle is function but we treat it as a object so simply we are adiing propety to it by using 
//handle.orgTime=time here orgTime is key and time is value
let iid=setInterval(handle,intervel*1000)
handle.orgTime =time
 function handle() {

    console.log(time+" secounds left is")
    time=time-intervel;

    if(time<=0 ){
        clearInterval(iid)
        alert(handle.orgTime+" secounds complted ")
    }
    
 }


