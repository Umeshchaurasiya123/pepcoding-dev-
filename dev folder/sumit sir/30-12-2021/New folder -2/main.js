
(function(){

let btn=document.querySelector("#myfirstbutton")
let container=document.querySelector("#container")
let templet=document.querySelector("#myTemplates")

let fid=0;
//let folders=[]

//console.log("hi all ")
btn.addEventListener("click",addfolder);
//console.log(" hi all to you")
function addfolder(){
    let fname=prompt("Folder name?");
    fid++;

    console.log("hi")
    //addFolderInPage(fid,fname);

}
/*
function addFolderInPage(fid,fname){
let divFolderTemplate=templet.Content.querySelector(".folder")
let divFolder=document.importNode(divFolderTemplate,true)

let divName=divFolder.querySelector("[purpose='name']");
divName.innerHTML=fname

let spanDelete=divName.querySelector("[action='delete']")
spanDelete.addEventListener("click",deleteFn)

let spanEdit=divName.querySelector("[action='edit']")
spanEdit.querySelector("click",editFn)

container.appendChild(divFolder);

}

function deleteFn(){

}

function editFn(){

}

*/
}); // iffe end here
