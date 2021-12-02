

//File System Module-

// ***files****//
//1. we will be reading, writing , updating , deleting files from our script

const fs = require('fs')

/*
 let content = fs.readFileSync('fileread.txt') // readFileSync is a method top read a file
console.log('This is Fileread.txt data-> '+content)
*/

/*
//  writing to a file 
// writeFileSync method is used to put data(write) to a file
// if the file passed doent exist it creates 
//a new file and writes to it

 fs.writeFileSync('writefile.txt' , 'function writeFileSync is accept two parameters 1st where to write and 2nd what to write')

   */ 

 /*
//  append a file basically means addding data at the end of file
// // appendfilesync adds data to the previously written file
// // basically it appnends a file with new data passed
 fs.appendFileSync('fileread.txt' , ' here we are appending something')
    */

 /*
// //delete a file by passing it's path
// //unlinkSync

 fs.unlinkSync('f2.txt')
// console.log('File Removed')
*/




//* Directories  are nothing but folder *//
/*
// create
// mkdirSync('directry ot folder want to create') is used to create a new directory
fs.mkdirSync('myDirectory first')
*/
/*
//delete
//rmdirSync is used to remove or delete a directory
fs.rmdirSync('myDirectory first')
*/

// to check whether a directory exists or not we can us existsSync method
// if the directory exists the method returns true otherwise false
//for this we use .existsSync('')
/*
 let doesExist = fs.existsSync('myDirectory')
 console.log(doesExist)
*/


// stats of a path (details of a folder)
// // lstatsync provides us with all the statistics of a directory

let stat = fs.lstatSync('myDirectory')
// console.log(stat)


/*
 console.log('isFile?' ,stat.isFile()) 
// isFile is a metnod that checks wheter a passed path is a file or not
*/
/*
 console.log('isDirectory' , stat.isDirectory()) 
//  isDirectory that checks wheter a passed path is a directory or not
*/


// readdirSync method is used to check the content of a particular directory
let folderPath = 'D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules'
let folderContent = fs.readdirSync(folderPath)
console.log('directory content - '+ folderContent)



//copy files
const path = require('path')
// src file , destFolder

let srcFilePath = 'D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules\\myDirectory\\abcd.txt'
let destFolder = 'D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules\\myDirectory2'

let filename = path.basename(srcFilePath)
console.log(filename)
//here we get abcd.txt in our file name
// basename method gets the actual name of the file or directory

let destFilePath = path.join(destFolder , filename)
console.log(destFilePath)

//fs.copyFileSync(srcFilePath , destfile path)
//all Sync function are part of fs module
fs.copyFileSync(srcFilePath,destFilePath)
//console.log("file Copied")
