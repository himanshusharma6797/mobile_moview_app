const obj = {
    "a" : 1,
    "b" : {
        "c" : 2,
        "d" : {
            "e" : 3
        }
    }
}

const flattenObject = (input) => {
    let obj = {}
    for (const i in input) {
        console.log(i);
    }
}

const oputput = {
    "a" : 1,
    "b.c" : 2,
    "b.d.e" : 3
}