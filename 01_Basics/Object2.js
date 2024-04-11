// Singleton objects : Whenever we create any object using new key word , this is singleton object i.e using new kewyword and contructor

// non-singleton object : wheneever we create any object without using new key word or we use create method to create the object , this  is non singleton

//In JavaScript, a singleton object is an object that is instantiated only once during the lifetime of an application. The singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.
// This can be particularly useful when exactly one object is needed to coordinate actions across the system.

const obj1={name:"Abhishek", Role: "Full stack developer"}
const obj2={location: "Hyderabad", age:22}

// const obj3=Object.assign({},obj1,obj2);
// const obj3=Object.assign(obj1,obj2);
const obj3={...obj1,...obj2}

// console.log(Object.keys(obj3));//  it only returns the keys of the object
// console.log(Object.values(obj3));// it only returns the values of the object
// console.log(Object.entries(obj3));// it returns each entries in the form of arrrays 


//Below line is destructuring concept
const {name}=obj3
console.log(name);




// console.log(obj3);