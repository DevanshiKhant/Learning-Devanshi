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
console.log(data);


//async fetch
async function fetchDataAsync() {
   return " hello world";
}

fetchDataAsync().then(
    function(value){
        console.log("Async Fetch Data:", value);
    },
    function(error){
        console.error("Error fetching data:", error);
        return "Error";
    });

// async await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Async Await Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();




//set timeout

setTimeout(() => {
        console.log("set timeout after 2 seconds");
    },2000);    
//set interval
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log("set interval :" , count);
    if(count >= 5){
        clearInterval(intervalId);
    }
},1000);


//math object
// console.log("Math.PI:", Math.PI);
// console.log("Math.sqrt(16):", Math.sqrt(16));
// console.log("Math.random():", Math.random());
// console.log("Math.round(4.7):", Math.round(4.7));
// console.log("Math.floor(4.7):", Math.floor(4.7));
// console.log("Math.ceil(4.3):", Math.ceil(4.3));
// console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
// console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));

//try catch finally
try{
    let result = riskyOperation();
} catch (error) {
    console.error("Error occurred:", error);
} finally {
    console.log("Cleanup actions can be performed here.");
}

//new constructor
let mypromise = new Promise((reslove , reject) => {
    let sucess = true;
    if(sucess)
        {
            reslove ("successful");
        }
        else
            {
                reject(faild);
            }
        })
        
        mypromise.then((message) =>
            {
                console.log(message);
        })
        .catch((error) =>
        {
            console.error(error);
        })

//asynchronous function
function resolveAfterSeconds(){
    return new Promise((resolve) => {
            resolve("asynchronous function resolved");
    });
}

async function asyncfunction(){
    console.log("calling");
    const result = await resolveAfterSeconds();
    console.log(result);
}

asyncfunction();


    
//async-await

async function foo(){
    const r1 = await new Promise((reslove)=>
    reslove("1"));
    console.log(r1);

    const r2 = await new Promise((reslove)=>
    reslove("2"));
    console.log(r2);

}

foo();

async function fetchdata(){
    try{
        const respone = await fetch("https://api.example.com");
        const data = respone.json();
        console.log(data);
    }catch(error)
    {
        console.log(error);
    }
}

fetchdata()


new Promise((reslove,reject) =>
{
    throw new error("error");
}).catch(function (error)
{
    console.log("error");
}).then(()=> console.log("successful"))


async function test(){
    let p = new Promise((reslove,reject) => {
        setTimeout(() => reslove("done"), 1000);
    });

    console.log("hello world");

    let result = await p;
    console.log(result);

}

//test();

//fetch api 
fetch ("https://jsonplaceholder.typicode.com/posts/1" , {
    method : "POST",
    headers : {
        'Content-Type' : "application/json",
    },
    body : JSON.stringify({
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

//fetch api async await
async function data1(){
    try{
        const response = await fetch ("https://api.bigdatacloud.net/data/reverse-geocode-client")
         const data = await response.text();
        console.log(data);
    }catch(error){
        console.error("Error:", error);
    }
}

data1();

Promise.allSettled([
     new Promise((resolve) => setTimeout(() => resolve('First Promise resolved'), 1000)),
     new Promise((resolve) => setTimeout(() => resolve('Third Promise resolved'), 1500)),
     new Promise((_, reject) => setTimeout(() => reject('Second Promise rejected'), 3000)),
]).then(alerts => console.log(alerts));

Promise.all([
     new Promise((resolve) => setTimeout(() => resolve('First Promise resolved'), 1000)),
     new Promise((resolve) => setTimeout(() => resolve('Third Promise resolved'), 1500)),
     new Promise((_, reject) => setTimeout(() => reject('Second Promise rejected'), 3000)),
]).then(alerts => console.log(alerts));


async function f(){
    return 1;
}

f().then(alert => console.log(alert));



