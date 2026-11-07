//* Type Assertion
//* "as" syntax 
type Status = 'pending' | 'manager' | 'member';

const someStatus : string = 'pending';

const showStatus = (status : Status) => {
    console.log('Your job Application is' + status);
} 
showStatus (someStatus as Status);
//* non-null assertion
//* constant assertion 