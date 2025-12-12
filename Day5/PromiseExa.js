console.log("Process 1")
setTimeout(()=>
{
    console.log("Process 2")
    setTimeout(()=>{
        console.log("Process 3")
    },2000)
},2000);

//Promise2
const res=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>
    {
        return res.json()
    }
    )
    .then(user=>
    {
        console.log(user)
    }
    )
    console.log(res)
