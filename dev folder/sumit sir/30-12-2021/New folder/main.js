 //IFIE
 // we write our code in iffe to avoid namespace pollution.

 //

 (function(){
     // to get button
     let fid=0
     let folders=[]
    let btn=document.querySelector("#myfirstbutton")
    // not document. querySelecor is daddy or superset of document.getEleemtbyId()
    // here we retrive  element by their tag i.e ocument.querySelector("h1")
    // by their id by their call etc.
    // basically querySelector give us(retrive or return) element tag

    let divContainer=document.querySelector("#container")
    // retrive all id containr tag
    let myTemplates=document.querySelector("#myTemplates")

    // retrive the id whose name is mytemplet contents

    btn.addEventListener("click",function(){
        let fname=prompt("enter a Folder namne");
        if(!fname){
            return 
        }

        // here to access content inside mytemplet which get by let myTemplates=  document.querySelector("#myTemplates")
        // so we use myTemplates.content.querySelector(".folder"); from this we get div inside templet 
        let divFolderTemplate=myTemplates.content.querySelector(".folder");
        // one we get div folder inside templet now we creat copy of it bu using document.importNode(foldername,true)

        let divFolder=document.importNode(divFolderTemplate,true);

        // one copy is created now we can add any thing to it by using 
        //copydiv.innerHTML=fname 

        let divName=divFolder.querySelector("[purpose='name']");
          //  divName contains <div> </div> of templet   
        divName.innerHTML=fname;
        divFolder.setAttribute("fid",++fid)
        console.log(fid)

        // one it is time to add copydiv to out divbelowe  button whose name is 
        // divContainer
        // to add to it we use .append(copydiv)
        /// i.e  divContainer.appendChild(fivFolder) 
      


        let spanDelete=divFolder.querySelector("span[action='delete']");
        // spanDelete contain delet keyword of html
        spanDelete.addEventListener("click",function(){
           let flage= confirm("Do you want to delete the folder "+divName.innerHTML);
           if(flage==true){
            divContainer.removeChild(divFolder)
            // ab folder mai sai delet karege
            let idx=folders.findIndex(f=>f.id==parseInt(divFolder.getAttribute("fid")))
            folders.splice(idx,1)
            console.log(folders)
            persistFolders();

           }

    
        }) 

        let spanEdit=divFolder.querySelector("span[action='edit']");
        spanEdit.addEventListener("click",function(){
            let fname=prompt("Enter the new folder name");
            if(!fname){
                return;
            }
          //  let divName=divFolder.querySelector("[purpose='name']");
            divName.innerHTML=fname;
            // yaha pai folders array of object mai change lkar na hai 
            let folder=folders.find(f=>f.id==parseInt(divFolder.getAttribute("fid")))
            // find() give us element wile findIndx give us index
            folder.name=fname;
            console.log(folders)
            persistFolders(); // call sai localstorage mai update ho gai ga
            
        })


        divContainer.appendChild(divFolder);
        // it is doign to make persistance 
        folders.push({
            id:fid,
            name:fname
        })
        persistFolders()

       // console.log(folders)

       

    }) // button click closing


    function persistFolders(){
        console.log(folders);
        let fjson=JSON.stringify(folders);
        localStorage.setItem("data",fjson)
    }

 
 })()
