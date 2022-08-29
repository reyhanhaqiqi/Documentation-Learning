// ! IF Statement
/* Statement IF akan menguji suatu keadaan */
/* Jika keadaan pertama benar maka akan menulis blok kode yang ada didalamnya */
/* Jika keadaan pertama salah maka akan melewati blok kode yang sudah ditulis */
const isRaining = true;

console.log("Persiapan sebelum berangkat bekerja.");

if (isRaining) {
    console.log("Hari ini sedang hujan, jadi harus membawa payung!!");
}
console.log("Berangkat bekerja.");


/* Statement Else akan melakukan operasi lain ketika kondisi pertama bernilai false */
let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log("Nilai " + x + " kurang dari 70");
}


/* Statement Else IF melakukan operasi yang memiliki banyak kondisi */
let language = "Indonesian";
let greeting = "Selamat Pagi";

if (language == "English") {
    greeting = "Good Morning";
} else if (language == "Japanese") {
    greeting = "Ohayou Ghozaimasu";
} else if (language == "Indonesian") {
    greeting = "Halo Selamat Pagi";
}

console.log(greeting);


/* Selain statement IF dan Else, ada operator bernama Ternary Operator  atau Conditional Expressions yang fungsinya sama denga statement if else*/
/* Statement ini sangat berguna untuk menuliskan blok kode yang minimalis */
/* condition ? true expressions : false expressions*/
const isMember = false;
const discount = isMember ? 0.1 : 0.0;
console.log('Anda mendapat diskon sebesar ' + discount * 100 + '%');


/* Truthy & Falsy */
/* Dalam statement if harus memasukkan expression yang akan dievaluasi kondisinya */
/* Truthy bernilai benar atau true dan Falsy bernilai salah atau false */
/* Tipe data yang dianggap Falsy :
Number 0
BigInt 0n
String kosong seperti "" atau ''
null
undefined
NaN atau Not a Number.
Selain contoh tersebut berarti bernilai Truthy atau benar */
let name = "";

if (name) {
    console.log(`Halo ${name}`);
} else {
    console.log('Nama di Variable masih kosong');
}