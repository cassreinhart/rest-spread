//arguments object
function max(){
    console.log(arguments);
};
//max()
//Arguments Object returned (arr like object)

function sum(){
    console.log(arguments[0]); //this works
    console.log(Array.from(arguments)); //gives a real array, put it in a var
    arguments.reduce((sum, val) => sum + val);
}//arguments.reduce is not a function (arguments is not an array)

//better, but not it...
function sum (){const args = Array.from(arguments);
    return args.reduce((sum, val) => {
        return sum + val;
    });
}

const max = () => {
    console.log(arguments); //arguments do not exist in arrow functions
}

//still an old way... but works
const max = function() {
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => {
        return currVal > max ? currVal : max;
    });
};
max(34, 55, 99, 2, 23) //99
max(34) //34

//the better way (REST operator)
//easier, cleaner, works in arrow fns
//eval to arr of all addtnl args passed in
function doSomething(...){
    //this fn uses rest operator
}; //rest, NOT spread

function sum(...nums) {
    //in here we now have access to an arr called nums
    console.log(nums); //actual array of args
    return nums.reduce((sum, n) => sum + n);
}

const sumAll = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
}; //sum as arrow fn

//also use to collect REMAINING arguments
function makeFamily (parent1, parent2...kids){
    console.log(parent1, parent2);
    console.log(kids);

    return {
        parents: [parent1, parent2];
        children: kids.length ? kids : 0
    };
}

const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof v === type)
}
filterByType('string', 23, 45, true, false, 0, 'hello', 'goodbye', undefined);
//['hello', 'goodbye']

function printStuff( a, b, ...rest, b){
    //doesn't work because after 3 dots it should have the name for the rest array, not an addtnl parameter
}

//spread
max(...something)//when calling a fn
[...something]//in an arr
{...something}//in obj

//when calling a fn, spread an iterable into indiv args
Math.max()//needs indiv args, not an arr
const nums = [4, 5, 88, 123, 0.92, 34];
Math.max(...nums); //123

const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined];
filterByType('number', ...things);

console.log('HELLO'); //HELLO
console.log(...'HELLO');// H E L L O
//in effect, we are doing:
console.log('H', 'E', 'L', 'L', 'O');

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

const paletteCopy = palette.slice(); //create a copy w/slice
const paletteCopy = ['sky blue', ...palette, 'grass green']; //spread into array literal & append/prepend easily

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['guatemala red cat', 'snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas]; //create new array from arrays w/ spread

const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Gray'];

//you can also spread other iterables
const vowels = 'aeiou';
const vowelArr = [...vowels]; //['a', 'e', 'i', 'o', 'u']

const tea = {
    type: 'oolong', 
    name: 'winter sprout',
    origin: 'Taiwan'
}

//js objects are not iterable, but you can use spread to make copies of objects

const tea2 = {...tea}; //take the tea object and copy each property over to here

const teaTin = {...tea, price: 22.99};

//make new tea that is also an oolong from taiwan
const newTea = { ...tea, name: 'golden frost'}; //order matters!!! this at the end overwrites the prev name property

const teaData = {
    steepTime : '30s',
    brewTemp: 175, 
    origin: 'japan'
}

const fullTea = {...newTea, ...teaData};f
//if you try and spread an array into an object
const colors = ['red', 'orange', 'blue'];
const dummyObject = {...colors}; //{0: red, 1: orange, 2: blue} uses indices as key
const dumberObj = {...colors, ...'CAT'}; //{0: C, 1: A, 2: T}

//spread and deep copies
//great for shallow data structures!
const shoppingCart = [
    {
        name: 'honey orchid',
        quantity: 2, 
        price: 13.5
    },
    {
        name: 'african solstice',
        quantity: 4, 
        price: 25.99
    }
];

const cartCopy = [...shoppingCart]; //[{name: honey orchid...etc}]
cartCopy[0] === shoppingCart[0]; //true- referring to the same reference, so if we change one, it alters the other