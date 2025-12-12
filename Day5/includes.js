let employee=[{ena:"Hema",mob:717},
    {ena:"Latha",mob:710},
    {ena:"Arthi",mob:712},
    {ena:"Eshaya",mob:812},
    {ena:"Maha",mob:813},
    {ena:"Divya",mob:813}

]
let newEmp=employee.filter((emp)=>
{
    return emp.ena.includes("")
})
console.log(newEmp)