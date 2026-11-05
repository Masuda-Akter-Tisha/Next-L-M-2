// literal type
type Status = 'pending';
const status : Status = 'pending';

// basic union
type identity = number | string;
const id : identity = 1230034;

// literal union
type Role = 'admin' | 'user' | 'manager';
const userRole : Role = 'manager'

// object union

type Admin = {id : number, role : 'admin', privileges : string []};
type Member = {id : number, role : 'manager', plans : [number, string, 'house',]}

type User = Admin | Member;

const user : User = {
    id : 2340891,
    role : 'manager',
    plans : [123, 'userAdmin', 'house']
}

console.log(status, id, userRole, user);