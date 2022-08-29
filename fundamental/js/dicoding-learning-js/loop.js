// ! For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ! For of loop
/* Statement ini sama dengan statement for biasanya, akan tetapi yang membedakan ialah pada blok condition */
let myArray = ['Luke', 'Han', 'Chewbacca', 'Leia'];

/* menggunakan For of */
for (const arrayItem of myArray) {
    console.log(arrayItem);
}
console.log('');

/* menggunakan For biasa */
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// ! While and Do-While
let i = 1;

/* menggunakan While */
while (i <= 20) {
    console.log(i);

    i++
}
console.log("");

/* menggunakan Do-While */
/* Do-While ini akan menjalankan program didalamnya dsebelum membaca expession yang akan dievaluasi */
let j = 1;
do {
    console.log(j);

    j++
} while (j <= 30);


// ! Infinite loop
/* kondisi ini merupakan sebuah program yang stucked */
let infinite = 1;

/* menggunakan while */
while (infinite <= 5) {
    console.log(infinite);

    infinite++
}

/* menggunakan for */
for (let infinite = 1; infinite <= 5; infinite++) {
    console.log(infinite);
}