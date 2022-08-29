// ! Import Module
/* const {
    coffeStock,
    isCoffeReady
} = require('./state');

console.log(coffeStock);
console.log(isCoffeReady);
console.log('');

const makeCoffe = (type, miligrams) => {
    if (coffeStock[type] >= miligrams) {
        console.log('Coffe siap untuk dibuat!');
    } else {
        console.log('Stock coffe habis!');
    }
}

makeCoffe('niskala', 20); */


// ! Import Module ES6
import {
    user as names,
    isMarried,
    greeting
} from './state.js';

console.log(names, isMarried, greeting);