const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray('abc');
const numberArr = wrapInArray(123);
stringArr.map(item => item.toUpperCase());
const userRes = {
    data: {
        name: 'sdfg',
        roll: 'djhgfjhsdg',
    },
    statusCode: 786346,
    success: true,
};
export {};
