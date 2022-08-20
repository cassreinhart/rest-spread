const filterOutOdds = () => {
    const nums = [...Array];
    return nums.filter((num) => num % 2 === 0);
};

function findMin(...arguments) {
    return Math.min(...arguments)
};

function mergeObjects (obj1, obj2) {
    return {...obj1, ...obj2};
};

function doubleAndReturnArgs (array, ...arguments) {
    return [array + ((...arguments) * 2)];
};

const removeRandoms = (...items) => {
    const random = Math.random(...items);
    return [...items, - random];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    return {...obj, key: `${val}`}; 
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
    return {...obj, key:`${val}`}
}