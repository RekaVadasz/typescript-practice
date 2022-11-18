import React from 'react';
import './App.css';

const name:string = 'John';

let age: number | string; //OR operator
age = 5;
age = 'five';

const isStudent: boolean = true;
const hobbies: string[] = ["hiking", "reading"]; //array of strings
const role: [number, string] = [2, "student"]; // tuple (fixed amount of values and types defined during declaration )

function printName(name: string) {
    console.log(name)
}
printName("john");

let printFirstName: (firstName: string) => void; //assign type of function to a variable

type Person  = { //create a template for the Person object
    name: string;
    age?: number
}


const person: Person = {
    name: "John",
    age: 22
}

let lotsOfPeople: Person[]; //array of Person objects




export default function App() {
  return (
    <div>Hello World</div>
  )
}
