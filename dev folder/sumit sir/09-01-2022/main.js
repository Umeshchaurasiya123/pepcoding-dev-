(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");

    // here we store data in ram , local storage and javascript i.e in 3 place
    let resources=[]; //  
    let cfid=-1;// inicially we are at root (which has a id of -1)
    let rid=0;
    // rid sabo unique banane kai lia hai 
    
    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);

    function addFolder(){
        let rname = prompt("Enter folder's name");
        if(!rname){ //empty space validation
            alert(" Enter name is not allowed");
            return;
        }

        rname=rname.trim();
        // uniquenes valiation
        let alreadyExists=resources.some(r=>r.name==rname&&r.pid==cfid);
        if(alreadyExists==true){
            alert(rname+" is already in use . Try some other name");
            return ;
        }
        // pid == parents id
        let pid=cfid;
        addFolderHTML(rname,rid,pid);
        resources.push({
            rid:rid,
            rname:rname,
            pid:cfid,
            rtype:"folder",
        })
        
        rid++;
        saveToStorage();       
    }


    function addFolderHTML(rname,rid,pid){

        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true); // makes a copy

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete = divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view]");
        let divName = divFolder.querySelector("[purpose=name]");

        spanRename.addEventListener("click", renameFolder);
        spanDelete.addEventListener("click", deleteFolder);
        spanView.addEventListener("click", viewFolder);
        divName.innerHTML = rname;
        divFolder.setAttribute("rid",rid);
        divFolder.setAttribute("pid",pid);

        divContainer.appendChild(divFolder);

    }


    function addTextFile(){
        let tfname = prompt("Enter text file's name");
        console.log(tfname);
    }

    function deleteFolder(){
        console.log("In delete");
    }

    function deleteTextFile(){

    }

    function renameFolder(){
        let nrname=prompt("enter new folders name");
        if(nrname!=null){
            nrname=nrname.trim();
        }
        if(!nrname){
            alert(" Empty name is not allowed");
            return;
        }

        let spanRename=this;
        let divFolder=spanRename.parentNode;
        let divName=divFolder.querySelector("[purpose=name]");
        let orname=divName.innerHTML;
        let ridTBU=parseInt(divFolder.getAttribute("rid"));
        if(nrname==orname){
            alert("Please enter a new name");
            return;
        }

        let alreadyExists=resources.some(r=>r.rname==nrname&&r.pid==cfid);
        if(alreadyExists==true){
            alert(nrname+" already exists");
            return;
        }


        // change html
        divName.innerHTML=nrname;
        // change 
        let resource=resources.find(r=>r.id==ridBU);
        resources.rname=nrname;
        

    }



    function renameTextFile(){

    }

    function viewFolder(){
        console.log("In view");
    }

    function viewTextFile(){

    }

    function saveToStorage(){

        let rjson=JSON.stringify(resources);
        // use to convert jso to a json string which can be saved
        localStorage.setItem("data",rjson);

    }

    function loadFromStorage(){
        let rjson=localStorage.getItem("data");
        if(!!rjson){
            resources=JSON.parse(rjson);
            for(let i=0;i<resources.length;i++){

                if(resources[i].pid==cfid)
                 {
                    addFolderHTML(resources[i].rname,resources[i].pid, resources[i].rid);
                 

                    if(resources[i].rid>rid){
                        rid=resources[i].rid;
                  
                    }
                }
            }
        }

    }

    loadFromStorage();
})();
// to prevent namespace pollution