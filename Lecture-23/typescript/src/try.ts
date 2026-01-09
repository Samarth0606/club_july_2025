// concept = inference

// function tryingAge2(user: {
//     firstName: string,
//     lastName: string,
//     age: number
// }): boolean{
//     return user.age > 18 ? true : false
// }

// tryingAge2( {
//     firstName: "Maverick",
//     lastName: "Vohra",
//     age: 4
// } )

// // DRY    WET
// ----------------------------------
// 1. objects

// Interface

// interface User{
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string
// }

// function tryingAge(user: User): boolean{
//     return user.age > 18 ? true : false
// }

// tryingAge( {
//     firstName: "Maverick",
//     lastName: "Vohra",
//     age: 4
// } )

// tryingAge( {
//     firstName: "Maverick",
//     lastName: "Vohra",
//     age: 4,
//     email: "sam@gmail.com"
// } )

// ----------------------------------
// 2. rarely used
// objects with fns (classes)

// interface Person{
//     name: string ;
//     age: number ;
//     greet: (phrase:string)=>void;
// }

// class Student implements Person{
//     name: string;
//     age: number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`);
//     }
// }

// let newStudent = new Student("Maverick", 4)
// let newStudent2 = new Student("Samarth" , 200)
// newStudent.greet("Goodmorning")
// newStudent.greet("Hello bro")


// ----------------------------------


// interface X{
//     name: string ;
//     age: number ;
// }
// interface Y extends X{
//     greet: (phrase:string)=>void;
// }

// class Student implements Y{
//     name: string;
//     age: number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`);
//     }
// }

// let newStudent = new Student("Maverick", 4)
// let newStudent2 = new Student("Samarth" , 200)
// newStudent.greet("Goodmorning")
// newStudent.greet("Hello bro")

// ----------------------------------

// types: aggregation data (similar to interface)

// unions/intersection = types
// unions/intersection ❌ interface

// function sam(id:number | string | boolean): void{
//     console.log(id);
// }
// sam(1);
// sam("1");

// interface Sam{}
// union:
// type Sam = number | string | boolean;

// function sam(id: Sam){
//     console.log(id);
// }
// sam(1);
// sam("1");
// sam(true);

// intersection:
// type DSA = {
//     teach: string,
//     leetcode: number
// }
// type Web = {
//     teach: string,
//     project: number
// }

// type Sam = Web & DSA;

// const sam: Sam = {
//     teach: "dev and dsa mentor",
//     leetcode: 311,
//     project: 14
// }


// type DSA = {
//     teach: string,
//     leetcode: number
// }
// interface Web extends DSA {
//     teach: string,
//     project: number
// }

// // type Sam = Web & DSA;

// // const sam: Sam = {
// const sam: Web = {
//     teach: "dev and dsa mentor",
//     leetcode: 311,
//     project: 14
// }


// let arr = [10,20,30,40];
// // let arr = ['10','20','30','40'];

// function maxi( arr: number[] ):number{
//     let max = 0;
//     for(let item of arr){
//         if(item>=max){
//             max = item;
//         }
//     }
//     return max;
// }
// maxi(arr)

// ----------------------------------------

// type X = {
//     name: string ;
//     age: number ;
// }
// type Y = X & {
//     greet: (phrase:string)=>void;
// }

// class Student implements Y{
//     name: string;
//     age: number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`);
//     }
// }

// let newStudent = new Student("Maverick", 4)
// let newStudent2 = new Student("Samarth" , 200)
// newStudent.greet("Goodmorning")
// newStudent.greet("Hello bro")


// ----------------------------------------

// Enums ->
// type Key = 'up' | 'down' | 'right' | 'left'

// function doSomething(keyPressed: Key ){
//     if(keyPressed === 'up'){ console.log("UP") }
//     else if(keyPressed === 'down'){ console.log("DOWN") }
// }
// doSomething('up')
// doSomething('down')
// doSomething('chandigarh')


// ----------------------------------------

// enum Direction{
//     up = "UP" ,
//     down = "DOWN" ,
//     right = "RIGHT", 
//     left = "LEFT"
// }

// function doSomething(keyPressed: Direction){
//     if(keyPressed === Direction.up){ console.log("UP") }
//     else if(keyPressed === Direction.down){ console.log("DOWN") }
// }
// console.log(Direction.up);
// console.log(Direction.down);
// console.log(Direction.right);
// console.log(Direction.left);

// console.log(doSomething(Direction.up) )
// console.log(doSomething(Direction.down) )

// ----------------------------------------

// practical implementation
// enum Responses{
//     Success = 201,
//     NotFound = 404,
//     Error = 500
// }
// const app = express()
// app.get('/' , (req,res)=>{
//     if(false){
//         return res.status(Responses.Success).json({msg:"Done"})
//     }else{
//         return res.status(Responses.Error).json({msg:"Not Done"})
//     }
// })


// Homework: generics (good advancement to TS)
