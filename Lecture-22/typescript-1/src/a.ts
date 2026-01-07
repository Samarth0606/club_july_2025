// let numberr:string = '22';
// numberr = '19';
// numberr = '323';
// console.log(numberr);


// 1. write a fn that greets a user with its username
// argument => username
// print => helo good mrng username

// function greeting(username: string){
//     console.log(`hello good morning ${username}`);
// }
// greeting("Samarth")


// 2. fn which returns us sum of 2 numbers

// function sum(a:number,b:number): number {
//     return a+b
// }
// sum(10,23)

// 3. fn => return boolean age 18+ true, else

// function ageCheck(n:number): boolean{
//     return n > 18 ? true : false
// }
// let age:boolean = ageCheck(10)
// console.log(age);

// 4. fn takes another fn as input runs it 2 seconds

// function a(){
//     console.log("hello")
// }

// function b(cb: ()=>void ){
//     setTimeout(()=>{
//         cb();
//     }, 2000)
// }

// b(a);

// function a(){
//     return 10;
// }

// // function b(cb: ()=>void): string{
// function b(cb: ()=>number): string{
//     setTimeout(()=>{
//         cb();
//     }, 2000)
//     return "vohra"
// }

// b(a);





// function time(twosec: ()=>void){
//     twosec();
// }
// function twosec(){
//     setTimeout(()=>console.log("run"),2000);
// }
// time(twosec);


// -----------------------

// let a = 100;
// console.log(a);

// let arrowww = (n:number) => n*n
// arrowww(10)

// -----------------------

// function sam(a:number,b:number){
//     return true  
// }

// sam(10,20)


// function abc(cb){ 
//     cb();
// }
// function bcd(){ console.log("balle balle bcd") }
// abc(bcd)
