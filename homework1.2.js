
const range = (lowPoint, highPoint) => {

    for(let i = lowPoint; i <= highPoint; i += 1) {
        if(i % 2) {
            console.log(i);
        }
    }
}

const main = () => range(15, 30);

main();