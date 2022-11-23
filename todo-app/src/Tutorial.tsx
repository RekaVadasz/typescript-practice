import React from 'react';
import './App.css';

const city:any = 'Budapest'; // we can use this but not recommended
let street: unknown; //can also take any type, we don't know yet
const name:string = 'John';

let age: number | string; //OR operator
age = 5;
age = 'five';

const isStudent: boolean = true;
const hobbies: string[] = ["hiking", "reading"]; //array of strings
const role: [number, string] = [2, "student"]; // tuple (fixed amount of values and types defined during declaration )

function printName(name: string) { //the function takes a string as a parameter
    console.log(name)
}
printName("john");

let printFirstName: (firstName: string) => void; //assign type of function to a variable
//void: returns undefinec
//never: does not return anything

type Person  = { //create a template for the Person object
    name: string;
    age?: number
}
//same as above: 
interface Student { //create a template for the Person object
    name: string;
    age?: number
}

interface Intern extends Person { // we add additional keys
    company: string;
}


const person: Person = {
    name: "John",
    age: 22
}

let lotsOfPeople: Person[]; //array of Person objects




