// const obj = {
//     "a" : 1,
//     "b" : {
//         "c" : 2,
//         "d" : {
//             "e" : 3
//         }
//     }
// }
// let obja = {}

// const flattenObject = (input) => {
//     for (const i in input) {
//         if (i) {
//             console.log(input[i]);
//         }
//     }
// }

// const oputput = {
//     "a" : 1,
//     "b.c" : 2,
//     "b.d.e" : 3
// }

// flattenObject(obj)

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

const arr = [1, 2, 3];
console.log(arr.last());
