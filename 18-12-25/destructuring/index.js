let a=[1,2,3,4,5,[100,200,300,400,500]]
let[A,B,C,D,E,[A1,B2,C3,D4,E5]]=a
console.log(A,B,C,D,E,[A1,B2,C3,D4,E5])
console.log(a[1])
console.log(A1)
console.log(B2)





// destructuring objects


let obj={name:"srikanth",age:"23",location:"vijyawda",details:{company:"nyb infotech",DateOfBirth:"25-05-2002"}}
let{details:{company,DateOfBirth}}=obj
console.log(obj.name)
var M= obj.name 
console.log(company)
console.log(DateOfBirth)
console.log(obj)

///iterations and generators
let c=[1,2,3,3,4]
var e=c[Symbol.iterator]()


console.log(e.next())

console.log(e.next())

console.log(e.next())

console.log(e.next())

console.log(e.next())

console.log(e.next())


