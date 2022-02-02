(function(){

    let btnAddFolder=document.querySelector("#myfirstbutton")
    let divContainer=document.querySelector("#container")
    let pageTemplates=document.querySelector("#myTemplates")

    let fid=0;
    let folder=[]

    btnAddFolder.addEventListener("click",adFolder);

    function adFolder(){

        let fname=prompt("Folder Name?")
        if(!fname){
            return;
        }

        fid++;
        adFolderInPage(fname,fid);

        folder.push({
            id:fid,
            name:fname
        });

persistFoldersToStorage();
}

function deleteFolder(){

let divFolder=this.parentNode;
let divName=divFolder.querySelector("[purpose='name']")

let flage=confirm("Do you want to delet the folder?")
if(flage==true){
divContainer.removeChild(divFolder)

let idx=folder.findIndex(f=>f.id==parseInt(divFolder.getAttribute("fid")))
folder.splice(idx,1)
persistFoldersToStorage();
    }

}

function editFolder(){
let divFolder=this.parentNode;
let divName=divFolder.querySelector("[purpose:'name']");

let fname=prompt("Enter the new folder name");
if(!fname){
    return ;
}

divName.innerHTML=fname;

let folder=folder.find(f=>f.id==parseInt(divFolder.getAttribute("fid")));
folder.name=fname;
persistFoldersToStorage();
}

function adFolderInPage(fname,fid){
    let divFolderTemplate=pageTemplates.content.querySelector(".folder")
    let divFolder=document.importNode(divFolderTemplate,true)

    let divName=divFolder.querySelector("[purpose='name']");
    divName.innerHTML=fname;
    divFolder.setAttribute("fid",fid)

}

function persistFoldersToStorage(){
    console.log(folder)
    let fjson=JSON.stringify(folder)
    localStorage.setItem("data",fjson);
}

function loadFolderFromStorage(){


    let fjson=localStorage.getItem("data")
    if(!fjson){
        folder=JSON.parse(fjson);
        folder.forEach(function(f){
            addFolderInPage(f.nama, f.id)
        })
    }
}

loadFolderFromStorage();

})();