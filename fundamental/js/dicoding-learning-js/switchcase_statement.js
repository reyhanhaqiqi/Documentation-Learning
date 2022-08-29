/* Switch Case Statement ini berfungsi untuk melakukan pengecekan dengan banyak kondisi yang lebih mudah dan ringkas */
/*switch (expression) {
    case value1:
        //do something
        break;

    case value2:
        // do something
        break;

    default:
        break;
}*/
let language = "Indonesian";
let greeting = 'Selamat Pagi';

switch (language) {
    case "English":
        greeting = "Good Morning";
        break;

    case "Japanese":
        greeting = "Ohayou Ghozaimasu";
        break;

    case "Indonesian":
        greeting = "Halo Selamat Pagi Semua!!";
        break;

    default:
        break;
}

console.log(greeting);