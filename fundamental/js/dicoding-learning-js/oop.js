/* OOP syntax with objek */
const mail = {
    from: 'reyhan',
    sendMessage: function (msg, to) {
        console.log(`You Send: ${msg} to ${to} from ${this.from}`);
    }
}

console.log(mail.from);
mail.sendMessage('Hello', 'putri');
console.log('');


// ! Class
/* OOP Class dengan prototype */
function mail1() {
    this.from = 'reyhan';
}

mail1.prototype.sendMessage = function (msg, to) {
    console.log(`You Send: ${msg} to ${to} from ${this.from}`);
}

const mail2 = new mail1();
mail2.sendMessage('Hai', 'putri');
console.log('');

/* OOP Class dengan class */
class Mail {
    constructor() {
        this.from = 'Reyhan Haqiqi';
    }

    sendMessage(msg, to) {
        console.log(`You Send: ${msg} to ${to} from ${this.from}`);
    }
}

const mail3 = new Mail();
mail3.sendMessage('Hai', 'Nadia Putri');
console.log('');

/* Property pada class */
class Mail1 {
    constructor() {
        this.from = 'Reyhan Haqiqi';
        this.contacts = [];
    }

    sendMessage(msg, to, from) {
        console.log(`You Send: ${msg} to ${to} from ${from}`);
    }
}

const mail6 = new Mail1();
mail6.sendMessage('Halo', 'Nadia Putri Rahmawan', 'Reyhan Haqiqi Alif');

/* Method pada class */
/* Pada method kita harus melakukan instansiasi terlebih dahulu classnya:
    const mail = new Mail();
    mail.sendMessage('Hello......', 'to......')
*/

/* Static Method pada class */
/* Kita bisa memanggil fungsi tanpa menginisiasi terlebih dahulu classnya;
    class mail {
        static isMessage(message) {
            return typeof message == 'string';
        }
    }

    mail.isMessage('contoh static method');
*/

/* Constructor */
/* Constructor merupakan sebuah method atau fungsi yang pertama kali dijalankan pada classnya. */
/* Contoh syntaxnya:
    contoh 1 dengan class:

    class mail {
        constructor (author) {
            this.from = author;
            console.log('is instantiated', author);
        }
    }

    const mail1 = new mail('emailku@dicoding.com);

    contoh 2 dengan function:

    function mail(author) {
        this.from = author;
        console.log('is instantiated', author);
    }
*/


// ! 4 ilar OOP 
/* Encapsulation */
/* Merupakan attribute atau method di dalam class yang bersifat private */
class mailEncapsulation {
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }

    sendMessage = function (msg, to) {
        console.log(`You Send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContacts() {
        return this._contacts;
    }
}

/* Abstraction */
/* Abstraksi bisa dibilang penerapan alami dari enkapslasi  */

/* Inharitance */
/* Merupakan sebuah fungsi pewarisan yang dimiliki child dari parentnya */
class mailInheritance {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to) {
        console.log(`You Send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContacts() {
        return this._contacts;
    }
}

class whatsapp extends mailInheritance {
    constructor(author) {
        super(author);
        this.username = 'Reyhan';
        this.addBussinessAccount = true;
    }

    myProfile() {
        return `my name ${this.username}, is ${this.addBussinessAccount ? 'Bussiness' : 'Personal'}`;
    }
}

const wa = new whatsapp();
console.log(wa.myProfile());
console.log('');

/* Polymorphism */
/* Objek memiliki betuk yang berbeda pada satu method atau fungsi yang sama */


// ! Overriding  Constructor
/* Merupakan metode perombakan pada sebuah method atau constructor yang dimiliki parent class */
class mailConstructor {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to) {
        console.log(`You Send: ${msg} to ${to} from ${this.from}`);
    }

    showAllContacts() {
        return this._contacts;
    }
}

class whatsappConstructor extends mailConstructor {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const waConstructor = new whatsappConstructor('Reyhan', true, '081336713034');
console.log(waConstructor.from);
console.log('');


// ! Overriding Method
/* Metode ini berfungsi untuk merombak method atau fungsi pada parent class */
class whatsappMethod extends mailConstructor {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }

    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const mailMethod = new mailConstructor('Reyhan Haqiqi');
mailMethod.sendMessage('Hai', 'Putri');
const waMethod = new whatsappMethod();
waMethod.sendMessage('Hallo', '081336713034');
console.log('');


// ! Object Composition
/* Merupakan sebuah prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class */
// [1] list of abstactions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message: ', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone: ', self.from)
});

// [2] create oject composition
const personalEnterprise = (from, message, store) => {
    // [3] attribute
    const self = {
        from,
        message,
        store,
    };

    // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created:', self.store)
    });

    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
}


const pe1 = personalEnterprise('081336713034', 'Hai produk baru nih!!', 'ReyhanStore');
pe1.createCatalog();
pe1.sendMessage();
console.log('');


// ! Built-in Class
/* Dalam JavaScript terdapat build-in class bawaan, misalnya Date, Object, Array, Math dan String */
/* Built-in Class digunakan unntuk memanipulasi data-data terkait dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek */
const myDate = new Date();
console.log(myDate);
/* tanpa parameter berarti berisi tanggal dan waktu saat ini */

const myDate1 = new Date('July 29, 2022 21:32:00');
console.log(myDate1);
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 

const myDate2 = new Date(874323200000);
console.log(myDate2);

const myAge = birthDay => {
    const birtDay = new Date(birthDay);
    const today = Date.now(); // now menghasilkan milisecond saat ini

    const diff_ms = today - birtDay.getTime(); //menghitung milisecond hari ini dengan tanggal lahir
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970;
}

console.log(myAge('2000-07-29'));

/* Selain Date juga bisa menggunakan Built-in class yang lainnya */
const listofContent = [1, 2, 'President', {}];
console.log(Array.isArray(listofContent));

const splitText = '12:20:00'.split(':');
console.log(splitText);