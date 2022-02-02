Function.prototype.myBind=function(){

    // obj.fun.bind(obj2,pram1,param2,param3 etc)
    // here out bind apply on fun so when we create a myBind here thsi represent fun()

    let ourFun=this;
    let ourArgArr=Array.from(arguments)
    let ourobj2=ourArgArr[0];
    let ourParameters=ourArgArr.slice(1)

    // now our bind function return somethig so let make it a function expresion

        let bindfunction=function(){

            let funArg=Array.from(arguments);
            console.log(funArg)
            let totalArgs=ourParameters.concat(funArg)

            ourFun.apply(ourobj2,totalArgs)
            // here if we call only ourFun() then we geet the output but with all values are undefied 
            // it indicates that we are accesing function functanality but not obj values
        }

        return bindfunction

}



let obj2={
    fname:"sumit malik",
    age:36

}

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

let res=obj.fun.myBind(obj2,"abcd","efgh","pqrs")
res("new args")