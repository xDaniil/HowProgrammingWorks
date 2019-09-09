let arr = [
    {  name: 'Marcus Aurelius', phone: '380445554433'  }
];

const findPhoneByName = (name) => {
    const res = arr.find((el) => el.name === name);
    return res.phone;
}

console.log(findPhoneByName('Marcus Aurelius'));