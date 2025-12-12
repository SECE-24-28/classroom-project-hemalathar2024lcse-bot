let student=[{sna:"Hema",age:19,sma:90,fee:true},{sna:"Latha",age:19,sma:97,fee:false},
{sna:"Ruba",age:20,sma:88,fee:true}
]
console.log(student)
//prints student marks alone
student.forEach((stu)=>
{
    console.log(stu)
    console.log(stu.sna+""+stu.sma)
}
)