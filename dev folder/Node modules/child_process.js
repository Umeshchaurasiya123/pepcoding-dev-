
//child_process is a node module used to create subprocess  
//within a script to perform  different tasks.
 //by child process we create smaller or subprocess then
 // we can give then diffrent diffrent task
 //to call any module or use any inbuild module we use required() function

 
const cp =  require('child_process')
/*
console.log('Trying to open Calculator')

cp.execFileSync('calc') // execSync is method used to execute files or read as executesynchronus 

console.log('Calculator Opened')

*/
/*
  console.log('Trying to open Vs Code')
 cp.execSync('code')
console.log('Vs code Opened')
*/

//cp.execSync('start brave https://www.pepcoding.com/')

// this is wrong
// let output=cp.execSync('node_demo.js')
//this is correct
 let output=cp.execSync('node node_demo.js')
 //here we get buffer file include value in decimal to convert it 
 // we first we concate it with string 
console.log(" "+output)




