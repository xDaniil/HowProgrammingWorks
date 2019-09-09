const table = {
    'name1': '380445554433',
    'name2': '380445554432'
};

const findPhoneByName = (name) => table[name];

console.log(findPhoneByName('name1'));