
function fun() 
{
    this.a=10;
    console.log(a);
}

fun()
console.log(a)

/*
function fun() 
{
    a=10;
    // let a=10  it is made in stack but a=10 or this.a made in windows or global execution context 
    console.log(a);
}

fun()
console.log(a)

// both are same

*/
// output 
10
10


// first function fun ko memory allocate hogi 
//now when we call function without new or object then wiondows assing to "thsi"
// fun first call hoga then then wo serach karega a apne function scope mai if it not found then it look in windows 
// yaad rakna ager direcly ager function ko call kar te hai to us mai this automatically assine ho jata hai 