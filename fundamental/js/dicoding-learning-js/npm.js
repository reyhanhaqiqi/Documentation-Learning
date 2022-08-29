/* Package lodash untuk kode2 js */
/* Package jest untuk testing js */
import _ from 'lodash';

const array = [1, 2, 3, 4];

let sum = array.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);