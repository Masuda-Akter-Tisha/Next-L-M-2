//* Top  types
let helloWorld : any = 'hello world';
helloWorld = 123;
// helloWorld.length;

const someThing : unknown = 'hello world';
//! someThing.length

//* Core types
let someThing2 : unknown;

const num : number = 123;
let nothing : void;

someThing2 = nothing;

//* literal types
let name : string;

const id : 'pending' = 'pending';

name = id;

type Status = 'pending' | 'success';

let someStatus : string;

const status : Status = 'pending';

someStatus = status;

//* Nullish type
interface User {
    name: string;
}

type loggedUser = null | User;

const currentUser : loggedUser = null;

//* Unit types
const greet = () => {
    console.log('hello world');
}

//* Sub type of Unit type
const anotherGreetings = () : undefined => {
    console.log('hello world');
    return undefined;
}

const greetings : void = anotherGreetings ();
console.log(greetings);

//* Bottom type

// const no : never = 23; 
const getError = (msg : string) : never => {
    throw new Error (msg);
}

// let x : string = getError ('abcd');
