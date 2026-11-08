//* typeOf

const x = 123;
 console.log(typeof x);

//* Type Guard

const print = (value : string | number) => {
    if (typeof value === 'string') {
        return value.toUpperCase ();
    } else {
        return value;
    }
}

//* Truthiness

type User = {
    name : string;
    address ?: {
        street : string
    }
} | null;

const loggedInUser : User = {
    name : 'Tisha',
    address : {
        street : 'abc',
    }
} 

const showAddress = (user : User) => {
  
       if (user && user.address) {
        console.log(user.address.street);
       }
   throw new Error ('user not found!');
}