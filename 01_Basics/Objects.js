const mySym=Symbol("Lion")

const obj1={
    name:"Abhishek",
    "role":"Full stack developer",
    ["ctc"]:"18K",
    age:22,
    [mySym]:"Lion",
    location:"Hyderabad",

}

console.log(obj1["age"]);//22
console.log(obj1.age);22

console.log(obj1[mySym]); //Lion
console.log(typeof obj1[mySym]);

obj1.age=20
//Object.freeze(obj1)// This freezes the object , no more further changes will be accepted.

//Attempting to add a new property or modify existing ones after freezing
// will not have any effect and will not throw any errors in non-strict mode.
// In strict mode, attempting to modify a frozen object will throw an error.
obj1.age=21;
console.log(obj1);


obj1.greeting=function(){
    console.log(`Hello ${this.name} User`);
}

console.log(obj1.greeting());