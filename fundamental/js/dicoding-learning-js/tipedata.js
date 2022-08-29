// ! Membuat kode pertama
console.log("Hello World!!");


// ! Membuat Variable dengan keyword let
/* let ini merupakan keyword variable yang valuenya bisa diubah */
let firstName = "Reyhan";
console.log(firstName);

let lastName; /* Merupakan sebuah statment yang mendeklarasikan variable */
lastName = "Fourniawan"; /* Merupakan sebuah expression karena memiliki sebuah nilai dari variable */
console.log(lastName);


// ! Membuat Variable dengan keyword const
/* const ini merupakan keyword variable yang valuenya tidak bisa diubah */
/*const a = 100;
console.log(a);

a = 200;
console.log(a);*/


// ! Tipe data  Undefined variable
/* Tipe data ini merupakan variable yang tidak memiliki nilai */
let b;
console.log(typeof (b));


// ! Tipe data Number
/* Tipe data ini merupakan variable yang memiliki nilai angka */
let c = 1;
let d = 1.5;
console.log(typeof (c) + " dan " + typeof (d));

/* Pada tipe data number kit bisa memberikan operasi aritmatik (+, -, /, *, %, **) */
let e = 100;
let f = 20;

console.log(e + f);
console.log(e - f);
console.log(e / f);
console.log(e * f);
console.log(e % f);
console.log(f ** f);

/* Aritmatik juga terdapat operasi increment(Penambahan) dan decrement(Pengurangan) */
let postfix = 5;
/* increment setelah varible */
console.log(postfix++);
console.log(postfix);

let prefix = 5;
/* increment sebelum variable */
console.log(++prefix);


// ! Tipe data BigInt
/* Tipe data ini merupakan variable yang memiliki value seperti number tapi dengan nilai yang cukup besar */
let bigInt = 12345678908345678989854345678n;
let myNumber = 1321454512121122;

console.log(bigInt);
console.log(myNumber);


// ! Tipe data String
/* Tipe data ini merupakan variable yang memiiki nilai string atau kata */
/* String dua petik */
let duaPetik = "kata";
console.log(typeof (duaPetik));

/* String satu petik */
let satuPetik = 'Satu Petik';
console.log(satuPetik);

/* String dua petik dalam satu petik */
let satuDuaPetik = '"Halo Dunia" apa kabar?';
console.log(satuDuaPetik);

/* String banyak petik dalam satu petik */
/* Harus ditandai dengan backslash(\) */
let banyakPetik = '"I think it\'s awesome!" and amazing"';
console.log(banyakPetik);

/* Menggabungkan banyak string dengan tanda + */
let gabungKata1 = 'Gabung';
let gabungKata2 = 'Kata';
console.log(gabungKata1 + gabungKata2);

/* Dalam sting kita bisa menambahkan string tamplate dengan format ${} */
/* Untuk menggunakan string tamplate harus dengan tanda backticks ` */
const myName = "Reyhan";
console.log(`Halo, nama saya ${myName} tinggal di krian`);


// ! Tipe data Boolean
/* Tipe data ini memiliki value berupa true or false */
let x = true;
let y = false;
console.log(typeof (x));
console.log(typeof (y));

/* Bisa menggunakan operato < dan > */
const g = 10;
const h = 20;
let isGreater = g < h;
let isLess = g > h;

console.log(isGreater);
console.log(isLess);


// ! Tipe data Null
/* Tipe data ini memiliki nilai kosong atau null */
let data = null;
console.log(data);


// ! Tipe data Symbol
/* Tipe data ini memiliki value symbol */
const id = Symbol("id");
console.log(id);


// ! Operator
// * Comparison Operator
/* Berfungsi untuk memberikan nilai pada variable */
let i = 10;
let j = 20;
i += j;

console.log(i);
/*  i += j yang berarti i = i + j
    i -= j yang berarti i = i - j
    i /= j yang berarti i = i / j
    i *= j yang berarti i = i * j
    i %= j yang berarti i = i % j */

/* Operator pembanding 
    ==(kedua nilai apakah sama(tidak identik))
    , !=(kedua nilai apakah tidak sama(tidak identik))
    , ===(kedua nilai apakah identik)
    , !==(kedua nilai apakah tidak identik)
    , >(membandingkan dua nilai apakah nilai pertama lebih besar)
    , >=(membandingkan dua nilai apakah nilai pertama lebih besar atau sama dengan)
    , <(membandingkan dua nilai apakah nilai pertama lebih kecil)
    , <=(membandingkan dua nilai apakah nilai pertama lebih kecil atau sama dengan) */

let aString = '10';
let aNumber = 10;

console.log(aString == aNumber); /* Nilai expression nya sama sama 10 jadi output true */
console.log(aString === aNumber); /* Nilai expression nya sama sama 10, tapi tipe datanya berbeda jadi output false */

// * Logical Operator
/* &&(and) akan menghasilkan nilai true apabila semua kondisi benar atau terppenuhi */
/* ||(or) akan mennghasilkan nilai true apabila salah satu kondisi benar atau terpenuhi */
/* !(not) berfungsi membalikkan suatu kondisi */
let k = 10;
let l = 12;

console.log(k < 15 && l > 10); /* (true && true) -> true */
console.log(k < 15 && l < 10); /* (true && false) -> false */

console.log(k < 15 || l > 10); /* (true && true) -> true */
console.log(k > 15 || l > 10); /* (false && true) -> true */

console.log(!(k < 15)); /* !(true) -> false */
console.log(!(k < 15 && l > 10)); /* !(true && true) -> !(true) -> false */