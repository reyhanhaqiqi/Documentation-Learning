// ! Function
/* Syntax Function */
function greeting() {
    console.log("Good Morning!!");
}

greeting();
console.log('');

/* Menambahkan Parameter */
function greeting2(name, language) {
    if (language == "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language == "Indonesia") {
        console.log(`Selamat Pagi ${name}!`);
    } else if (language == "Japanese") {
        console.log(`Ohayou Ghozaimasu ${name}!`);
    }
}

greeting2('Reyhan', 'Indonesia');
console.log('');

/* Mengembalikan sebuah nilai dengan return. number */
function multiply(a, b) {
    return a * b;
}

let result = multiply(20, 10);
console.log(result);
console.log('');

/* Mengembalikan sebuah nilai dengan return. string */
function greeting3(name, language) {
    if (language == 'Japanese') {
        return `Ohayou Ghozaimasu ${name}`;
    } else if (language == 'English') {
        return `Good Morning ${name}`;
    } else if (language == 'Indonesia') {
        return `Selamat Pagi ${name}`;
    }
}

let greetingMessage = greeting3('Haqiqi', 'Indonesia');
console.log(greetingMessage);
console.log('');


// ! Expression Function
/* Expression Function bisa disimpan dala bentuk variabel */
const greeting4 = function (name, language) {
    if (language == 'Japanese') {
        return `Ohayou Ghozaimasu ${name}`;
    } else if (language == 'English') {
        return `Good Morning ${name}`;
    } else if (language == 'Indonesia') {
        return `Selamat Pagi ${name}`;
    }
}

console.log(greeting4('Alif', 'Japanese'));
console.log('');


// ! Function Parameter
/* Function dengan parameter objek */
const user = {
    id: 24,
    userName: 'Fuuyuki',
    fullName: 'Reyhan Haqiqi Alif Fourniawan',
};

function introduce({
    userName,
    fullName,
}) {
    console.log(`${userName} is ${fullName}`);
}

introduce(user);

/* Default parameters */
function exponentFormula(baseNumber, exponent = 5) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentFormula(3);
console.log('');

/* Rest Parameters */
function sum(...numbers) {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    return result;
}

console.log(sum(1, 2, 3, 4, 5));
console.log('');


// ! Arrow Function
/* Tanpa parameter */
const sayHello = () => {
    console.log('Selamat Siang Semuanya!!');
}

sayHello();
console.log('');

/* Dengan parameter */
const sayName = (name) => {
    console.log(`Nama saya ${name}`);
}

sayName('Reyhan');
console.log('');

/* Arrow Function dengan body satu baris */
const multiply2 = (a, b) => a * b;

console.log(multiply2(10, 10));
console.log('');


// ! Variabel Scope
/* Globally Scope & Local Scope */
const a = 20;

const scope = () => {
    const b = a * a;
    return b;
}

console.log(scope());
console.log('');


// ! Closure
/* Membuat function dalam inner function */
function parent() {
    let nama = 'Reyhan Haqiqi';

    function child() {
        console.log(`Halo, Nama say adalah ${nama}`);
    }

    child();
}

parent();

/* Mengembalikan function dengan return */
function parent2() {
    let nama = 'Alif Fourniawan';

    function child2() {
        console.log(`Halo, Nama saya adalah ${nama}`);
    }

    return child2;
}

let myParent = parent2();
myParent();
console.log('');

/* Program counter dengan closure */
const add = () => {
    let counter = 0;

    return () => {
        return ++counter;
    }
}

let addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());