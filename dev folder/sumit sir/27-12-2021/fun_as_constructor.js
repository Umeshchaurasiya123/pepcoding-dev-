// function as constructor 

function person(name,age){

    this.name=name
    this.age=age
    this.sayHi=function(name) {
        console.log(this.name+" [ "+this.age+" ] say hi to  "+name)
    }
}
 let pi=new person("sumit malik ",34)
 pi.sayHi("umesh")

// firt person ko memory allocate hogi at 10k. 
// then let pi=new person("sumit malik ",34) execute
// then from new keyword empty object is going to create in 11k
// then function person("sumit malik",34) is executes
//so in that function person() 11k (empty object) is act as "this"
// now this.name
// this.age
//this.sayhi() 
// all this  add name age sayhi function to 11k (empty object)
// note important ,after "this" is going to return by function if we not specify or specify 
// now 11k going to return by person function to pi
// fomr that pi.sayi("umesh ") going to executes 


