const numbers = [4, 16, 9, 25];

const map = numbers.map(Math.sqrt)
console.log("map :" , map);

const length = numbers.length
console.log("length :",length);

const sort = numbers.sort(function(a,b) {return a-b;});
console.log("sort :" , sort)

const reverse = numbers.reverse();
console.log("reverse :" ,reverse);

const max = Math.max(...numbers)
console.log("max :" ,max);

const min = Math.min(...numbers)
console.log("min :",min);

const reduce = numbers.reduce((x,y=0) => x + y);
console.log("reduce :",reduce);

const filter = numbers.filter((x) => x % 2 == 0) ;
console.log("filter :",filter)


module.exports = {map,length , sort, reverse,max,min,reduce,filter};