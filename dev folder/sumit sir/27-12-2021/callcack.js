Array.prototype.processString=function(sscb,lscb,len) {
    "// small string callback and long string callback for sscb and lscb"
    
 let arr=this;
 for(let i=0;i<arr.length;i++){

    let str =arr[i];
    if(str.length<len){
        sscb(str)
    }

    else
    {
        lscb(str)
    }

 }
    return this  
    // this is basically help in channing bacuase we are return "this " which is array itself so it will help in channing i.e halp in .map .filter reduce kind of thinks 
 }

arr=["My name is sumit malik. I am a teacher. I teach programing. ",
"India won in australia. Englend wont't.",
"India has gone to SA. India startd well. But it rains.",
"Lorem ipsum dolor. ipsum dolor lorem."]

arr.processString(smallStringProcessing,longStringProcessing, 50)


function smallStringProcessing(str) {
    let res1=str.split(".")
    //console.log(res1)
    let res2=res1.filter((s)=> s.length>1)
    //console.log(res2)
    // trim work on induvisual strning so we have to use for each loop or map 
    let res3=res2.map((s)=> s.trim())
   // console.log(res3)
    let res4=res3.map(s=>s.split(" "))
    //console.log(res4) // here we get 2d array
    let res5=res4.map(s=>s.reverse())
    //console.log(res5)
    let res6=res5.map(s=>s.join(" "))
    //console.log(res6)
    let res7=res6.join(" ")
   // console.log(res7)
    let res8=res7+"."
    console.log(res8)

}

function longStringProcessing (str) {
// we break out string with split(". ") at this place
let res1=str.split(".")
//console.log(res1)
let res2=res1.filter((s)=> s.length>1)
//console.log(res2)
// trim work on induvisual strning so we have to use for each loop or map 
let res3=res2.map((s)=> s.trim())
//console.log(res3)
let res4=res3.reverse();
//console.log(res4)
// but ab join kar na hai 
// join opposite hai  split() ka
let res5=res4.join()

//console.log(res5)
let res6=res5+"."
console.log(res6)
}

// create a function which takes an input twp callback function 
// some for small string (length<30 ) and other for long string 

// short string callback shoud do the folling things
// My name is sumit malik. I am teacher. I teach programing
// output => malik sumit is name My. teacher am I. programing teach I.

// long string callback should do the following 
// I teach programing . I am teacher. My name is sumit malik
