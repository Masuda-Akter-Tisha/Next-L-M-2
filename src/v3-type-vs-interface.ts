//* Type Alias vs Interface

//? Interface is generally connected to objects
//? Type alias is more connected to literals, unions, tuples, primitives 

// TODO : Type Alias
type Id = number;

//! interface Id = number;

type Role = 'admin' | 'manager';

//! interface  'admin' | 'manager';

interface User {
    name : string;
    id : Id;
    role : 'admin' | 'member';
}

const user : User = {
    name : 'Tisha',
    id : 40498,
    role :"member"
}

// interface flower {name : string}

// TODO: Interface (advantage of interface)

interface Animal {
    species : string;
}

interface Cat extends Animal {
    breed : 'Felix Catus';
}

const cat : Cat = {
    breed : "Felix Catus",
    species : 'Persian',
}

console.log(cat.species);

// TODO: type alias used intersection ("&")

type Vehicle = {
    brand : string;
}

type Car = Vehicle & {
    //? "&" symbol is used to perform intersection
    model : string
}

const car : Car = {
    model : 'Corolla',
    brand : 'Toyota'
}

//! This is not possible in type alias 
// type Temployee = {
//     name : string;
// }


// type Temployee = {
//     name : string;
// }

interface Iemployee {
    name : string;
}

interface Iemployee {
    id : string;
}

const employee : Iemployee = {
    name : 'Abdul',
    id : 'asdf45'
}
