// ! Penanganan eror
/* Kode Berhasil */
try {
    console.log('Program dijalankan');
    console.log('Ini juga dijalankan');
    console.log('');

} catch (error) {
    console.log('Program berhenti');
}

/* Kode Gagal */
try {
    console.log('Program dijalankan');
    errorCode;
    console.log('Ini berjalan atau tidak?');

} catch (error) {
    console.log('Program berhenti');
    console.log('');
}

/* try-catch-finally */
try {
    console.log('Program dijalankan');
    console.log('Ini juga dijalankan');

} catch (error) {
    console.log('Program berhenti');
} finally {
    console.log('Final Program');
    console.log('');
}


// ! Throwing Error
let json = '{"name": "Reyhan", "age": "20"}';

try {
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
    console.log('');

} catch (error) {
    console.log(error.user);
    console.log(error.age);
}


let json1 = '{ bad json }';

try {
    let user = JSON.parse(json1);

    console.log(user.name);
    console.log(user.age);
    console.log('');

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log('');
}

/* Throw code */
let json2 = '{"age": 25}';

try {
    let user = JSON.parse(json2);

    if (!user.name) {
        throw new SyntaxError("'name' is required!");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(`JSON parse: ${error.message}`);
}

/* Penanganan eror code dengan if statement */
let json3 = '{"name": "haqiqi", "age": "15"}';

try {
    let user = JSON.parse(json3);

    if (!user.name) {
        throw new SyntaxError("'name' is required!");
    }

    console.log(user.name);
    console.log(user.age);

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON parse: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}


// ! Custom Error
/* Metode untuk membuat eror sendiri. */
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

let json4 = '{"age": 25}';

try {
    const user = JSON.parse(json4);

    if (!user.name) {
        throw new ValidationError("'name' is required!");
    }

    if (!user.age) {
        throw new ValidationError("'age' is required!");
    }

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON SyntaxError: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}