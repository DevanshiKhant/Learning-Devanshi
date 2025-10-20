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


// export and import module

export let num = [1,2,3,4];

export default function hello()
{
    console.log("hello world");
}


//class and inheritance

class cat {
    constructor(name){
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name} makes a noise`);
    }
}

class lion extends cat{
    speak(){
        super.speak();
        console.log(`${this.name} roars`);
    
    }
}

const l = new lion("lazzy");
l.speak();


//object immutability

let freeze = {name : "john" , age : 20};
//Object.freeze(freeze);
freeze.name = "deo";
console.log(freeze);


//curring 

function sum(a,b,c){
    return a+b+c;    
}

console.log("regular function " ,sum(1,2,3));

function curring(a){
    return function(b)  {
        return function(c){
            return a+b+c;
        }
    }
}

console.log("curring function :",curring(1)(2)(3))


//closures
function myfunc(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
        return count;      
}

const counter = myfunc();
counter();
counter();
counter();

//parse and stringify JSON
const arr12 = {name : "john" , age : 30 ,city :["newyork" , "boston" , "sanfrancisco"] };
const myjson = JSON.stringify(arr12);
console.log("json data :" , myjson);
console.log(typeof myjson);



const parsed = JSON.parse(myjson);
console.log("parsed data :" , parsed);
console.log(typeof parsed);

for(const key in parsed){
    console.log(`${key} : ${parsed[key]}`);
}


//rowjson

const rawjson = JSON.rawJSON('"hello world"');
console.log(JSON.stringify({value : rawjson}));


//fetch api - request 

const request1 = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const request2 = request1.clone();

const response1 = await fetch(request1);
console.log(response1.status);

const response2 = await fetch(request2);
console.log(response2.status);

// fetch api - response
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

const data = await response.json();
console.log(data);