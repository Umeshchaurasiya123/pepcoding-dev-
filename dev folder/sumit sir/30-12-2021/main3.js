(function(){
    let btnAddFolder = document.querySelector("#myfirstbutton");
    let divContainer = document.querySelector("#container");
    let pageTemplates = document.querySelector("#myTemplates");
    let fid = 0;
    let folders = [];

    // load in the beginning

    btnAddFolder.addEventListener("click", function(){
        let fname = prompt("Folder name?");
        if(!fname){
            return;
        }

        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;
        divFolder.setAttribute("fid", ++fid);

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener("click", function(){
            let flag = confirm("Do you want to delete the folder " + divName.innerHTML);
            if(flag == true){
                divContainer.removeChild(divFolder);
                
                let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));
                folders.splice(idx, 1);
                persistFolders();
            }
        });

        let spanEdit = divFolder.querySelector("span[action='edit']");
        spanEdit.addEventListener("click", function(){
            let fname = prompt("Enter the new folder name");
            if(!fname){
                return;
            }

            divName.innerHTML = fname;

            let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("fid")));
            folder.name = fname;
            persistFolders();
        });

        divContainer.appendChild(divFolder);
        folders.push({
            id: fid,
            name: fname
        });
        persistFolders();
    });

    function persistFolders(){
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }




})();