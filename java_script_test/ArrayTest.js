// let arr=["mohit","rohit","sohit","rohan","kunal","akash"];
// arr.sort();
// console.log(arr);

// let arr=[
//     {name:"mohit",age:24,course:"Dac",fee:123456,location:"bihar"},
//     {name:"rohit",age:20,course:"Adca",fee:123456,location:"bihar"},
//     {name:"kunal",age:24,course:"Ai",fee:123456,location:"pune"},
//     {name:"nishant",age:26,course:"Embeded",fee:123456,location:"nasik"},
//     {name:"Anu",age:24,course:"Ai",fee:123456,location:"pune"},
// ]
// arr.sort((a,b)=>a.name.localeCompare(b.name));
// arr.sort((a,b)=>b.name.localeCompare(a.name))
// console.log(arr);
// console.log(arr);

let arr=[]
arr.push("mohit");
arr.push("anjali");
arr.push("kunal");
arr.push("rohan");
arr.push("sohan");
arr.push("mrunal");

console.log(arr);
console.log("sorted array:")
arr.sort();
console.log(arr);

console.log("sorted array:by descending order")
arr.sort((a,b)=> b.charCodeAt(0)-a.charCodeAt(0))
console.log(arr);


