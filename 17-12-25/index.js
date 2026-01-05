let a=new Promise((reject,resolve)=>
{
    resolve("done");
})
let b=Promise.reject("failure")
Promise.all([a,b])
.then((a)=>
{
    console.log(a)

})
.catch((b)=>{
console.log(b)
})
//////promise.race



let c= new Promise((resolve,reject)=>
{
    setTimeout(()=>{
 resolve("c is done ")
    },1000);
   
})
let d= new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
         reject("d is done") 

    },100);
  
})
Promise.race([c,d])
.then((c)=>{
console.log(c)})

.catch((d)=>{
    console.log(d)
}
);

Promise.allSettled([c,d])
.then((d)=>
{
    console.log(d)
})



