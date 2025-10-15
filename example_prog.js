// function return value

function add(a , b){
    return a+b;
}

const result = add(5,3);
console.log( "return function value : " ,result);

//map method

const a = [1,2,3,4]
const r = a.map(num => num*num);
let r1 = a.map(function(val,index){
    return {key : index , value : val*val};
})

console.log("return arrow function : ",r);
console.log( "return map function : " ,r1);

//filter method

const arr= [ 1,2,1,3];
const r2 = arr.filter((num) => num > 1);
console.log( "return filter function : " , r2);

//reduce method

const arr1 = [4,5,6,7];
const r3 = arr1.reduce((num,x=0) => num+x);
console.log("Reduce method : ", r3);

// reverse method

arr1.reverse();
console.log("reverse method : " , arr1);

// for each method

const arr2 = ["apple","banana","cherry"];
const res = arr2.values();

for (let value of res){
    console.log("arr2 values: " , value);
}

// for- each

arr2.forEach(function myfunc(x){
    console.log(x);
})

// ternary operator

const age = 15;
const status = age >= 18 ? "adult" : "minor" ;
console.log(status);

// spread operator

const arr3 = [ 1 , 2 , 3];
const arr4 = [4 , 5 , 6];
const r4 = [...arr3,...arr4];
console.log("spread operator", r4);

// destructuring

const arr5 = ["apple","banana","cherry"];
const[one,two,three,...rest] = arr5;
console.log(one);
console.log(three);
console.log(rest);

