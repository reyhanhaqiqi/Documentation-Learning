// ! Imperatif Code
/* Gaya penulisan dengan  metode 'How to solve' */
const names = ['Reyhan', 'Haqiqi', 'Alif', 'Fourniawan'];

const newNames = [];

for (let i = 0; i < names.length; i++) {
    newNames.push(`${names[i]}!`);
}

console.log(newNames);
console.log('');


// ! Deklaratif Code
/*Gaya penulisan denganmetode 'What to solve' */
const names1 = ['Nadia', 'Putri', 'Rahmawan'];

const newNames1 = names1.map((name) => `${name}!`);

console.log(newNames1);
console.log('');


// ! Pure Function
/* Konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap niai yang berada di luar fungsi parameternya */
const createPersonWithAge = (age, person) => {
    return {
        ...person,
        age
    };
}

const person = {
    name: 'Bobo',
};

const newPerson = createPersonWithAge(18, person);
console.log({
    person,
    newPerson
});
console.log('');


// ! Immutability
/* Sebuah objek tidak boleh dirubah setelah obejek tersebut dibuat */
const user = {
    firstName: 'Harry',
    lastName: 'Potter',
};

const createUserWithNewLastName = (newLastName, user) => {
    return {
        ...user,
        lastName: newLastName
    };
}

const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);
console.log('');


// ! Rekursif
/* Teknik pada sebuah function yang memanggil dirinya sendiri */
const countDown = (start) => {
    console.log(start);

    if (start > 0) {
        countDown(start - 1);
    }
}

countDown(10);
console.log('');


// ! High Order Function
/* Metode dimana kita bisa menyimpan function dalam sebuah variabel dan mengembalikan function di dalam function */
const hello = () => {
    console.log('Hello!');
}

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();
console.log('');


// ! Reusable Function
/* Array Map */
const newArray = ['Reyhan', 'Haqiqi', 'Alif', 'Fourniawan'].map((myArray) => {
    return `${myArray}!`
});

console.log(newArray);

/* Array Filter */
const truthy = [1, '', 'Halllo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthy);

const students = [{
        name: 'Reyhan',
        score: 82,
    },

    {
        name: 'Haqiqi',
        score: 90,
    },

    {
        name: 'Alif',
        score: 100,
    }
];

const newFilterScore = students.filter((student) => student.score >= 90);
console.log(newFilterScore);