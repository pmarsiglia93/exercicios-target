function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) return true;
        let next = a + b;
        a = b;
        b = next;
    }

    return false;
}


function main() {
    const numero = 21;

    if (isFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

main();
