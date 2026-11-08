//* Type Assertion
//* "as" syntax 
type Status = 'pending' | 'manager' | 'member';

const someStatus : string = 'pending';

const showStatus = (status : Status) => {
    console.log('Your job Application is' + status);
} 
showStatus (someStatus as Status);

//* non-null assertion
interface Config {
    port ?: number;
}

const config : Config = {
    port : 5050,
}

const currentPort : number = config.port!; 
// const currentPort : number = config.port as number;

//* constant assertion 

const configuration = {
    port : 8080,
    prefix : "api/v2",
} as const;

//! configuration.prefix = "api/v2";