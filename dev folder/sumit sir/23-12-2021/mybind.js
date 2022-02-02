// writing program for mybind

Function.prototype.myBind=function(){

    //obj.fun.bind(obj2,"param1","para2")
    //.bind() apply to fun function and fun aap ko this mai milega
    let orgFun=this // basically we are getting obj 
   // console.log(argFun)
    let args=Array.from(arguments) // collecting all the args from myBind
    //console.log(args) 
    let boundFun=function(){

    let thisForOrgFun=args[0];
    //console.log(thisForOrgFun)
    let argsForOrgFun=args.slice(1)
    //console.log(argsForOrgFun)
    //console.log(args)
    let argsFromInvocation=Array.from(arguments)
    console.log(argsFromInvocation)
    argsForOrgFun=argsForOrgFun.concat(argsFromInvocation)
    orgFun.apply(thisForOrgFun,argsForOrgFun)


 }

return boundFun
}






let obj2={
    fname:"sumit malik",
    age:35

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

let res=obj.fun.myBind(obj2,"abcd","efgh")
res("new args")