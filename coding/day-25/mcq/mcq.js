function height()
{
    var height = 123.56;
    var type = (height>=190)?"Taller":"Little shorter"
    return type
}

// console.log(height())

console.log(Math.abs(-7.25));


let sum = 0;
const a = [1,2,3];
a.forEach(getsum);
console.log(sum);
function getsum(ele){
    sum+=ele
};


const ex = ({a,b,c})=>{
    console.log(a,b,c);
}
// ex({0,1,2})