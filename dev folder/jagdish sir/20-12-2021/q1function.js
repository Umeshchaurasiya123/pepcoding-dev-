// good questions
imreal();
//1
function imreal(){
    console.log("i am real")
}
//2

function imreal(name){
    console.log("i am real")
}

imreal()

//3
function imreal(){
    console.log("He is not i am real")
}

imreal()
// output
//He is not i am real
//He is not i am real

// in javascript sare functioon ko memeory 1st allocate hoti hai 
//baad mai variablre to theb function exrcute hota hai top to bottom
// here two function with same namea so jo last mai hoga wo top mai hoga call kar nai kai time use ko call hoga 

//function are alwase created in heap
// their is no function overloding in javascipt and their address store in stack



