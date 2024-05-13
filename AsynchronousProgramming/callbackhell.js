
//here we use Arrow Function(=>)
function getData(dataId,nextData)
{
    setTimeout(()=>{
        console.log("data",dataId);
        if(nextData)
            {
                nextData();
            }
    },4000)
}
/*getData(1);
getData(2);
getData(3);

here we call three time but all the process are print in same time after 4 second(4000)
*/
//if we want to print after 4s one process is run and then after 4s anoter process is run and so on.....

//then we use callback(callback is a function passed as an argument to another function)

getData(1,()=>
{
    console.log("getting data 2");
    getData(2, ()=>
    {
        console.log("getting data 3");
        getData(3,()=>{
            console.log("getting data 4")
            getData(4);
        });
    });
});

//this is called callback hell because its very tricky to understand and insted of this we use (Promises concept)