(function(){
    let btnAddFolder=document.querySelector("#addFolder");
    let btnAddTextFile=document.querySelector("#addTextFile");
    let divbreadcrum=document.querySelector("#breadcrumb");
    let divContainer=document.querySelector("#container");
    let templates=document.querySelector("#templates");


    btnAddFolder.addEventListener("click",addFolder);
    btnAddTextFile.addEventListener("click",addTextFile);

    function addFolder(){
        let fname=prompt("Enter the folder name");
        //console.log(fname);
        let divFolderTemplate=templates.content.querySelector(".folder");
        let divFolder=document.importNode(divFolderTemplate,true);

        let spanRename=divFolder.querySelector("[action=rename]");
        let spanDelete=divFolder.querySelector("[action=delete]");
        let spanView=divFolder.querySelector("[action=view]");
        spanRename.addEventListener("click",renameFolder);
        spanDelete.addEventListener("click",deleteFolder);
        spanView.addEventListener("click",viewFolder);

        let divName=divFolder.querySelector("[purpose=name]");
        divName.innerHTML=fname;
        divContainer.appendChild(divFolder);


    }

    function addTextFile(){
        let tfname=prompt("Enter text file name");
        console.log(tfname);
    }

    function deleteFolder(){
        alert("delete function click");
    }
    function deleteTextFile(){

    }

    function renameFolder(){
        alert("rename function clicked");
    }
    function renameTextFile(){

    }

    function viewFolder(){

        alert("view Function clicked")
    }
    function viewTextFile(){

    }

    function saveToStorage(){

    }
    function loadFromStorage(){

    }

    loadFromStorage();

})();

