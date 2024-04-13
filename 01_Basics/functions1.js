function add(num1,num2){
    return num1+num2;
}
console.log(add(5,3));

function addAllprice(...price) {
    return price.reduce((sum,current) => sum+current,0)
}

console.log(addAllprice(600,450,230));

function one(){
    console.log("inside funtion 1...");
    console.log(this);
}
one()

const two=()=>{
    console.log("inside function 2");
    console.log(this);
}
two()