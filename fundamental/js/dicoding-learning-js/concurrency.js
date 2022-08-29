// ! Synchronous & Asynchronous
/* Merupakan sebuah pengeksekusian kode javaScript */
/* Synchronous berarti kode dieksekusi sesuai urutan kode */
/* Asynchronous berarti kode bisa dieksekusi tidak sesuai dengan uruatan kode */


// ! setTimeout
/* Merupakan cara paling mudah untuk menjalankan kode secara Asynchronous */
console.log('Selamat Datang');

setTimeout(() => {
    console.log('Terima Kasih sudah mampir, silakan datang lagi ya...');
}, 3000);

console.log('Ada yang bisa dibantu?');


// ! Callback function
const orderCoffe = callback => {
    let coffe = null;

    console.log('Sedang membuat kopi, silakan menunggu!');

    setTimeout(() => {
        coffe = 'Kopi sudah jadi';
        callback(coffe);
    }, 3000);
}

orderCoffe(coffe => {
    console.log(coffe);
})


// ! Callback hell
/* Dengan menggunakan fungsi .then */
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients).then(makeTheDough).then(pourDough).then(bakeACake).then(console.log);
}


// ! Constructuring Promise Object
const executorFunction = (resolve, reject) => {
    const isCoffeMakerReady = true;

    if (isCoffeMakerReady) {
        resolve('Kopi berhasi dibuat!!');
    } else {
        reject('Mesin kopi sedang rusak');
    }
}

const makeCoffe = () => {
    return new Promise(executorFunction);
}

const coffePromise = makeCoffe();
console.log(coffePromise);


// ! Consuming Promise
const stock = {
    coffeBeans: 250,
    water: 1000,
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeBeans >= 16 && stock.water >= 250) {
            resolve('Stock cukup, bisa untuk membuat kopi');
        } else {
            reject('Stock tidak cukup');
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);


// ! onRejected with Catch Method
checkStock().then(handleSuccess).catch(handleFailure);


// ! Chaining Promise
const state = {
    stock: {
        coffeBeans: 250,
        water: 10000
    },

    isCoffeMachineBusy: false,
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeMachineBusy) {
                resolve('Mesin kopi siap digunakan');
            } else {
                reject('Maaf, mesin kopi sedang sibuk');
            }
        }, 1000);
    })
}

const checkStock1 = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;

        setTimeout(() => {
            if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
                resolve('Stock cukup, bisa untuk membuat kopi');
            } else {
                reject('Stock tidak cukup');
            }
        }, 1500);
    })
}

const brewCoffe = () => {
    console.log('Membuatkan kopi anda....');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Kopi sudah siap!');
        }, 2000);
    })
}

function makeEspresso() {
    checkAvailability().then((value) => {
            console.log(value);
            return checkStock1();
        })
        .then((value) => {
            console.log(value);
            return brewCoffe();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeMachineBusy = false;
        });
}

makeEspresso();


// ! Promise All
/* Menggunkan keyword Promis.all() */
const promises = ['one', 'two', 'three'];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });


// ! Async-await
async function makeCoffe2() {
    const coffe = await getCoffet();
    console.log(coffe);
}

makeCoffe2();


// ! Handle onRejected using async-allowTaint
async function makeCoffe3() {
    try {
        const coffe = await getCoffet();
        console.log(coffe);
    } catch (error) {
        console.log(rejectedReason);
    }
}

makeCoffe3();


// ! Chaining Promise using async-await
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}