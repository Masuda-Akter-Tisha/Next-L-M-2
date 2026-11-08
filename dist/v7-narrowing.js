//* typeOf
const x = 123;
console.log(typeof x);
//* Type Guard
const print = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: 'Tisha',
    address: {
        street: 'abc',
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
    }
    throw new Error('user not found!');
};
export {};
