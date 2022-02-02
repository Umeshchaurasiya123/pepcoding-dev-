 //IFIE
 // we write our code in iffe to avoid namespace pollution.

 (function(){
    // to get button
   let btn=document.querySelector("#myfirstbutton")
   //  document. querySelecor is daddy or superset of document.getEleemtbyId()
   // here we retrive  element by their tag i.e ocument.querySelector("h1")
   // by their id by their call etc.
   // basically querySelector give us(retrive or return) element tag

   let divContainer=document.querySelector("#container")
   // retrive all id =container tag
   let myTemplatesAllContent=document.querySelector("#myTemplates")
   

   // retrive the id whose name is mytemplet contents

   btn.addEventListener("click",function(){
       let fname=prompt("enter a Folder namne");
       if(!fname){
           
           return  // condition for empty case
       }

       // here to access content inside mytemplet which get by let myTemplateAllContent= document.querySelector("#myTemplates")
       // so we use myTemplatesAllContent.content.querySelector(".folder"); from this we get div inside templet 
       let divFolderInsideTemplate=myTemplatesAllContent.content.querySelector(".folder");
       // one we get div folder inside templet now we creat copy of it bu using document.importNode(foldername,true)

       let divFolderClone=document.importNode(divFolderInsideTemplate,true);

       // one copy is created now we can add any thing to it by using 
       //copydiv.innerHTML=fname 


       divFolderClone.innerHTML=fname;

       // one it is time to add copydiv to out divbelowe  button whose name is 
       // divContainer
       // to add to it we use .append(copydiv)
       /// i.e  divContainer.appendChild(fivFolder) 
       divContainer.appendChild(divFolderClone);
   })

})()
