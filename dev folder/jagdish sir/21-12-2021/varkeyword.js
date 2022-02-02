console.log("before Declearation 2",a)
var a;
console.log("after Decleration 4",a)
a=10;
console.log("After inicialization 6",a)

function fb()
 {
    console.log("Before declearation 8",a)
    var a;
    console.log(" After decleration 10",a)
    a=20;
    if(true){
        var a=30;
        console.log("35",a);
    }

    console.log("After inicialization 12",a)

}

fb();

//remeber var is function block

// output
/*
before Declearation 2 undefined
after Decleration 4 undefined
After inicialization 6 10
Before declearation 8 undefined
 After decleration 10 undefined
35 30
After inicialization 12 30
*/