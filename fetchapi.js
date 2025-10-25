 //fetch api async await
async function data(){
    try{
        const response = await fetch ("https://api.bigdatacloud.net/data/reverse-geocode-client")
         const data = await response.text();
        console.log(data);
    }catch(error){
        console.error("Error:", error);
    }
}

//data();


// let urls = [
//   'https://jsonplaceholder.typicode.com/posts/1',
//   'https://jsonplaceholder.typicode.com/posts/2',
//   'https://jsonplaceholder.typicode.com/posts/3'
// ];

// async function process(urls) {
//   const results = [];
//   for (const url of urls) {
//       const response = await fetch(url);
//       const data = await response.json(); 
//       results.push(data);
      
//   }
//   return results;
// }

// process(urls)
//   .then(allResult => {console.log('All URLs processed:', allResult);
//   });


// // function callUrlWithDelay(url, delay) {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             console.log(`${url}`);
// //             resolve(`Data from ${url}`); 
// //         }, delay);
// //     });
// // }

// // let promiseChain = Promise.resolve();

// // urls.forEach(url => {
// //     promiseChain = promiseChain.then(() => callUrlWithDelay(url, 3000));
// // });


// const url = [
//     Promise.resolve('https://jsonplaceholder.typicode.com/posts/1'),
//     Promise.resolve('https://jsonplaceholder.typicode.com/posts/2'),
//     Promise.resolve('https://jsonplaceholder.typicode.com/posts/3'),
// ];

// const p = Promise.all(url);
// console.log(p);
// setTimeout(() => {
//     console.log("the queue is empty");
//     console.log(url);
// });



// let checkEven = new Promise((resolve, reject) => {
//     let number = 1;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });

// checkEven
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error)); 


let p = new Promise(function (resolve, reject){
    setTimeout(() => {
       resolve(1) 
    }, 1000);
})

// p.then(result => console.log(result))
// .catch(error => console.log(error));

p.then(function(result){

    console.log(result);

    return new Promise(function(resolve,reject){
       setTimeout(()=> resolve(result * 2) ,2000)
    });

})

.then(result => console.log(result))


