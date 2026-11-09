const wrapInArray = <T> (value : T) => {
    return [value];
}

const stringArr = wrapInArray <string> ('abc');
const numberArr = wrapInArray <number> (123);

stringArr.map (item => item.toUpperCase ());


interface User {
        name: string;
        roll: string;
}

interface Blog {
        title : string;
        description : string;
        date: string 
}

interface ApiResponse <T> {
    data : T;
    success : boolean;
    statusCode : number;
}

type UserResponse = ApiResponse <User>;
type BlogResponse = ApiResponse <Blog>;

const userRes : ApiResponse <User> = {
    data : {
        name : 'sdfg',
        roll : 'djhgfjhsdg',
    },
    statusCode : 786346,
    success : true,
}

