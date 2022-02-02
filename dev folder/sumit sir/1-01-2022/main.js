(function(){

let btn=document.querySelector("#myfirstbutton")
let divContainer=document.querySelector("#container")
let pageTemplates=document.querySelector("#myTemplates")

// now our program contain t0 many folder so to keep tracke of it we create folder array where we store our folder  updare it and delete from it
let folders=[];

btn.addEventListener("click",adFolder);

function adFolder(){

    let fname=prompt("enter  folder name");
    if(!!fname){
        let fidx=folder.findIndex(f=>f.name==fname)
        if(fidx==-1){
            fid++;
            folders.push({
                id:fid,
                name: fname
            });
            addFolderToHtml(fname,fid)
            saveToStorage();
        }
        else {
            alert(fname+" already exists")
        }

    } else {
        alert("Please enter something")
    }

}

function deleteFolder(){

}

function editFolder(){

}

function addFolderToHtml(fname ,fid){

    let divFolderTemplate=pageTemplates.content.querySelector(".folder")
    let divFolder=document.importNode(divFolderTemplate,true)

    let divName=divFolder.querySelector("[purpose='name']")
    let spanEdit=divFolder.querySelector("[action='edit']")
    let spanDelete=divFolder.querySelector("[action='delete']")

    divFolder.setAttribute("fid",fid)
    divName.innerHTML=fname;
    spanEdit.addEventListener("click",editFolder);
    spanDelete.addEventListener("click",deleteFolder);

    divContainer.appendChild(divFolder);

}
function saveToStorage(){

    let fjson=JSON.stringify(folders);
    localStorage.getItem("data",fjson);

}

function loadFromStorage(){

let fjson=localStorage.getItem("data");
// if fjson=" " or null or undefiend or 0 the in that case !! fson ==true 
// if fjson="anbv" the !! fjson give flase
if(!!fjson){
// now fjson contain data in strng format  to convert into json we use  JSON.parse()
folders=JSON.parse(fjson);
folders.forEach(f=>addFolderToHtml(f.name,f.id));
 // if any data is available then first load it form localstorage 
}
}

loadFromStorage();

});