// ! Object
/* Tipe data Object mampu menyimpan nilai dari beragam tipe data */
const user = {
    firstName: 'Reyhan',
    lastName: 'Fourniawan',
    age: 20,
    isMarried: false,
    "rumah saya": "Krian",
};

/* Mengakses Objek dengan menggunakan namaobjek.property */
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Saya sekarang berumur ${user.age} tahun`);
console.log(`Saat ini saya belum menikah`);

/* Mengakses Objek dengan menggunakan [] */
console.log(`Saya tinggal di ${user["rumah saya"]}`);
console.log('');
console.log('');

/* Memodifikasi property dalam objek */
const girl = {
    nama: 'Nadia Putri',
    umur: 19,
    jenisKelamin: 'pria',
    rumah: 'krian',
};

girl.umur = 20;
girl['jenisKelamin'] = 'Perempuan';
/* Menghapus property di dalam objek */
delete girl.rumah;
console.log(girl);
console.log('');


// ! Array
/* Array merupakan tipe data yang dapat mengelompokkan lebih dari satu value ke dalam satu variable */
let myArray = ['cokelat', 50, 2.5, true, 'programming'];

console.log(myArray);
console.log(myArray[3]);
console.log(`Panjang array yang tersedia sebanyak ${myArray.length}`);

/* Untuk menambahkan dan mengeluarkan value pada array, value tersebut akan berada pada index terakhir */
/* Menambahkan value pada array menggunakan push() */
myArray.push('JavaScript');
console.log(myArray);

/* Mengeluarkan value pada array menggunakan pop() */
myArray.pop();
console.log(myArray);

/* Untuk menambahkan dan mengeluarkan value pertama pada array bisa menggunakan shift() dan unshift() */
/* Mengeluarkan value pertama pada index dengan shift() */
myArray.shift();
console.log(myArray);

/* Menambahkan value pertama pada index dengan unshift() */
myArray.unshift('Coding');
console.log(myArray);

/* Menghapus value pada array dengan menggunakan delete() dan unshift() */
delete myArray[4];
console.log(myArray);

/* Menghapus element pada array menggunakan splice() dan unshift() */
myArray.splice(2, 1) /* Menghapus dari index ke 2 sebayak 1 element */
console.log(myArray);
console.log('');
console.log('');


// ! Spread
/* Spread ini berfungsi untuk melebur atau melepaskan nilai dari array atau objek */
const buah = ['Semangka', 'Melon', 'Rambutan', 'Mangga'];
console.log(buah);
console.log(...buah);

const hewan = ['Kucing', 'Singa', 'Burung'];
console.log(hewan);

/* Spread 2 variable */
console.log(...buah, ...hewan);

/* Bisa membuat variable baru untuk spread 2 variable */
const newArray = [
    ...buah,
    ...hewan
];
console.log(newArray);
console.log('');

/* Spread pada Objek */
const objek1 = {
    name1: 'Reyhan Haqiqi',
    age: 20,
};

const objek2 = {
    name2: 'Nadia Putri',
    age: 19,
};

const newObjek = {
    ...objek1,
    ...objek2,
};

console.log(newObjek);
console.log('');


// ! Destructuring array & objek
/* Berfungsi untuk membuat value pada array atau property pada objek berada pada satuan yang lebih kecil */
const destructuring = [1, 'saya', true];
const myNumber = destructuring[0];
const myString = destructuring[1];
const myBoolean = destructuring[2];

console.log(myNumber, myString, myBoolean);


// ! Destructuring Objek
let profil = {
    name: 'Reyhan',
    age: 20,
};

let {
    name,
    age
} = profil;
console.log(name, age);

/* Mengganti value pada property objek */
profil.name = 'Haqiqi';
profil.age = 21;
({
    name,
    age
} = profil);
console.log(name, age);

/* Membuat variable lokal */
let {
    name: localName,
    age: localAge,
} = profil;

console.log(localName, localAge);
console.log('');


// ! Destructuring Array
let food = ['seafood', 'salad', 'nugget', 'sup'];
let [firstArray, secondArray, thirdArray, fourthArray] = food;

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);
console.log(fourthArray);

/* Mengubah value pada array */
let myFood = 'noodles';
let herFood = 'bowl';

[myFood, herFood] = food;
console.log(myFood, herFood);
console.log('');

/* Menukar posisi nilai */
let a = 1;
let b = 2;

console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);


// ! Map
/* Map ini merupakan tipe data mirip seperti objek tetapi map boleh memiliki key dengan tipe data apapun */
const map = new Map([
    [1, 'satu'],
    [2, 'dua'],
    [true, true],
]);

console.log(map);
console.log('');

/* Mendapatkan nilai get() dan menambahkan pasangan nilai set() */
const country = new Map([
    ['Jakarta', 'Indonesia'],
    ['London', 'Inggris'],
    ['Tokyo', 'Jepang'],
]);

console.log(country.size);
country.set('New Delhi', 'India');
console.log(country.get('Jakarta'));
console.log(country.size);
console.log(country);


// ! Set
/* Set ini memiliki value yang tidak berurutan, set ini juga bersifat unik dan tidak diduplikasi */
const mySet = new Set([1, 2, 5, 2, 1]);

console.log(mySet);

/* Menambahkan data dalam set menggunakan add() */
mySet.add(20);

console.log(mySet);

/* Menghapus data pada set */
mySet.delete(2);

console.log(mySet);