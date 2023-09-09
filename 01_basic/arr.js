const Arr=[1,2,3];
// console.log(Arr.push([4,5,9]));
// console.log(Arr);

const arr1=["name","no","g-21"];

let newArr=Arr.concat(arr1);
// console.log(newArr);
// console.log(newArr.length);
// console.log(Object.keys(newArr));

let c=[...Arr,...newArr];
// console.log(c);
const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1.copyWithin(1,3));
// console.log(array1);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result=words.filter((words)=>words.length<6);
// console.log(result);

//console.log(Array.from('foo'));
// console.log(words.reverse());
// console.log(words);
// console.log(Arr.shift());
// console.log(Arr.unshift(4,5));
// console.log(Arr);

const months = ['Jan', 'March', 'April', 'June'];
let d= months.splice(2,0,"august");
//console.log(months);