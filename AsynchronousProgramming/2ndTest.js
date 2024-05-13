//Asynchronous programming 
//That means(in this programming cocept dont interrupt the block of processes.)

console.log("first");
console.log("second");
console.log("third");
//this process is run after 2 second but not any effect in its next process
setTimeout(()=>{
    console.log("Hello World");
},2000);

//this all process are ron before the previous process 
console.log("fourth");
console.log("fifth");

/*
setTimeout(()=>{
    console.log("Hello World");
},2000);

 Hellw world print after 2 second(but in between all the previous process are run and its after the process
     is also run dont wait for this process)
*/