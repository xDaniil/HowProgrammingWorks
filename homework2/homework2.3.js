let arr = [true, 'hello', 5, 12, -200, false, false, 'word', 2, -12, 'yo'];

let table = {
    'boolean': 0,
    'number': 0,
    'string': 0,
    'any': 0,
    'undefined': 0,
    'null': 0
};

for (const el of arr) {
    table[typeof el]++;
};
console.log(table);

//part 2 soon
