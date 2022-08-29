const averageExams = (valuesExams) => {
    const numberValidation = valuesExams.every(exam => typeof exam === 'number');

    if (!numberValidation) {
        throw Error('Please input a number!!');
    }

    const sumValues = valuesExams.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sumValues / valuesExams.length;
}

const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam, name);

    if (average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
}

module.exports = {
    averageExams,
    isStudentPassExam
};