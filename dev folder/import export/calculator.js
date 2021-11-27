
function add(a,b)
{
    console.log("additipn is ",a+b)
}
function sub(a,b)
{
    console.log("subtraction is ",a-b)
}
function mul(a,b)
{
    console.log("multiplication is ",a*b)
}
function div(a,b)
{
    console.log("division is ",a/b)
}
function mod(a,b)
{
    console.log("modul is ",a%b);
}
//here module.export is object by which you can export function in key value pair

module.exports={
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div,
    moduler:mod
}
