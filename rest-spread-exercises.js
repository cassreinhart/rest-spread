const filterOutOdds = (Array) => {
    const nums = [...Array];
    return nums.filter((num) => num % 2 !== 0);
};

function findMin(...arguments) {
    return Math.min(...arguments)
};

const mergeObjects = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj;
};

const doubleAndReturnArgs = (array, ...arguments) => {
    return [...array, ...arguments.map(val => val * 2)] ;
};

const removeRandoms = items => {
let random = Math.floor(Math.random()* items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj 
};

const removeKey = (obj, key) => {
    const copy = {...obj};
    delete copy[key];
    return copy;
};

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}