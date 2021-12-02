const path=require('path')

//path.extname give extension of file
let exetname=path.extname('D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules\\writefile.txt')
console.log(exetname)
// path.basename give base name of file
let basename=path.basename('D:\\pepcoding_umesh_umesh\\FJP_dev\\Node modules\\writefile.txt')
console.log(basename)

//get you the path of current directry you are in 
console.log(__dirname)
//get you the path of current file you are in
console.log(__filename)
