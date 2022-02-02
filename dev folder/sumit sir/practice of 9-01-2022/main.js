(function(){
    let btnAddFolder=document.querySelector("#addFolder");
    let btnAddTextFile=document.querySelector("#addTextFile");
    let divbreadcrum=document.querySelector("#breadcrumb");
    let divContainer=document.querySelector("#container");
    let templates=document.querySelector("#templates");
    let resources=[];
    let cfid=-1 // note cfid and pid both act as aliase in our program
    let rid=0;
    btnAddFolder.addEventListener("click",addFolder);
    btnAddTextFile.addEventListener("click",addTextFile);

    function addFolder(){
        let rname=prompt("Enter the folder name"); // r stand for resorces
        if(!rname) // empty name validation
        {
            alert("Empty name is not allowed");
            return;
        }
        rname=rname.trim()
        // uniquenes validation
        let alreadyExist=resources.some(r=>r.rname==rname&&r.pid==cfid);
        if(alreadyExist==true){
            alert(rname+"  is already in use . Use some other namae");
            return;
        }
        let pid=cfid
        addFolderHTML(rname,rid,pid)
        
        resources.push({
            rid:rid,
            rname:rname,
            rtype:"folders",
            pid:cfid,
        });
        saveToStorage();
        rid++;
    }

    function addFolderHTML(rname,rid,pid){

        let divFolderTemplate=templates.content.querySelector(".folder");
        let divFolder=document.importNode(divFolderTemplate,true);

        let spanRename=divFolder.querySelector("[action=rename]");
        let spanDelete=divFolder.querySelector("[action=delete]");
        let spanView=divFolder.querySelector("[action=view]");
        spanRename.addEventListener("click",renameFolder);
        spanDelete.addEventListener("click",deleteFolder);
        spanView.addEventListener("click",viewFolder);

        let divName=divFolder.querySelector("[purpose=name]");
        divName.innerHTML=rname;
        divFolder.setAttribute("rid",rid);
        divFolder.setAttribute("pid",pid);
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
        let nrname=prompt("Enter a folder name"); //nrname =new resources name
        if(nrname!=null){
            nrname=nrname.trim();
        }

        if(!nrname) // empty name validation
        {
            alert("Enter name is not allowed");
            return;
        }

        let spanRename=this;
        let divFolder=spanRename.parentNode;
        let divName=divFolder.querySelector("[purpose=name]");
        let orname=divName.innerHTML;


        if(orname==nrname){
            alert("Plesea enter a new name");
            return
        }

        let ridTBU=  parseInt(divFolder.getAttribute("rid"));

        let alreadyExist=resources.some(r=>r.rname==nrname&&r.pid==cfid)
        if(alreadyExist==true){
            alert(nrname+" already exists")
            return
        }

        // chamge name in html
        divName.innerHTML=nrname;
        // change in ram
        let resource=resources.find(r=>r.rid==ridTBU);
        resource.rname=nrname;
        // change in storge
        saveToStorage();

    }


    function renameTextFile(){

    }

    function viewFolder(){

        alert("view Function clicked")
    }
    function viewTextFile(){

    }

    function saveToStorage(){
        let rjson=JSON.stringify(resources);
        localStorage.setItem("data",rjson);
    }
    function loadFromStorage(){
    let rjson=localStorage.getItem("data");
    if(!!rjson){
        resources=JSON.parse(rjson);
        for(let i=0;i<resources.length; i++){
            if(resources[i].pid==cfid){
                addFolderHTML(resources[i].rname,resources[i].rid,resources[i].pid);

            }
            if(resources[i].rid>rid){
                rid=resources[i].rid;
            }

        }
    }
    }

    loadFromStorage();

})();

