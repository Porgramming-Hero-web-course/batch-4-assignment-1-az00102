//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. 
//Add a constraint to ensure the property name exists on the object.

function getProperty<objParam, n extends keyof objParam>(obj: objParam, name: n){
    return obj[name];
} 

// Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));