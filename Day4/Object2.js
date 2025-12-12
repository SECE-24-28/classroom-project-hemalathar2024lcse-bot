let student={sna:"Hema",age:19,demo:function()
    {
        console.log(" Hello Myself "+this.sna)
    }
}
student.demo()
let student2={sna:"latha",age:19,samp:()=>
{
            console.log(" Hello Myself "+this.sna)

}
}
student2.samp()