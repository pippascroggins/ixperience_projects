function fib () {
    let j = 0;
    let k = 1;
    console.log(j);
    console.log(k);
    let nextTerm = j + k;
    for (let i = 3; i <= 10; i++) {
        console.log(nextTerm);
        j = k;
        k = nextTerm;
        nextTerm = j + k;
    }
}

