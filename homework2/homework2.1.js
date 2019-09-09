hoist = () => {
    a = 20;
    let b = 100;
}

hoist();
  
console.log(a); //access as to global var outside the hoist function
console.log(b); //b is not defined(outside the hoist() func)