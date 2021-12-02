//const { METHODS } = require('http')
const path=require('path')

//path.extname give extension of file 
let exetname=path.extname('D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules\\writefile.txt')
console.log(exetname)  // here it will give us extension .txt
// path.basename give base name of file 
let basename=path.basename('D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules\\writefile.txt')
console.log(basename) // i.e writefile.txt

//now suppose  we want to make file path
//so first we take directrt path then  base name  and then join them using 
//path.join() METHODS.

let directrypath='D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules'
let filepath=path.join(directrypath,basename)
console.log(filepath)
//get you the path of current directry you are in 
console.log(__dirname)
//get you the path of current file you are in
console.log(__filename)
