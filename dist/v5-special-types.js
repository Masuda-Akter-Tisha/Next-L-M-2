//* Top  types
let helloWorld = 'hello world';
helloWorld = 123;
// helloWorld.length;
const someThing = 'hello world';
//! someThing.length
//* Core types
let someThing2;
const num = 123;
let nothing;
someThing2 = nothing;
//* literal types
let name;
const id = 'pending';
name = id;
let someStatus;
const status = 'pending';
someStatus = status;
const currentUser = null;
//* Unit types
const greet = () => {
    console.log('hello world');
};
//* Sub type of Unit type
const anotherGreetings = () => {
    console.log('hello world');
    return undefined;
};
const greetings = anotherGreetings();
console.log(greetings);
//* Bottom type
// const no : never = 23; 
const getError = (msg) => {
    throw new Error(msg);
};
let x = getError('abcd');
export {};
