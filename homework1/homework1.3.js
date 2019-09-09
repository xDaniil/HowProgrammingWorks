const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x * x * x;

const main = () => {
    for(let i = 1; i <= 50; i++) {
        console.log(average(square(i), cube(i)));
    }
}

main();
