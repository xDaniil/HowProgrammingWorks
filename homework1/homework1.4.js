const Obj1 = {
    name : 'Dan'
};

let Obj2 = {
    name : 'Max'
};

const Obj3 = {
    name : 'Misha'
};

Obj1.name = 'Max';
Obj2.name = 'Dan';

//Obj1 = Obj2
Obj2 = Obj3;

const createUser = (name, city) => ({
    name,
    city
});

console.log(createUser('Marcus Aurelius', 'Roma'));