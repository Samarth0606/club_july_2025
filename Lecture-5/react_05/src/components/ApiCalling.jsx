// import { useEffect, useState } from "react"
// import axios from 'axios';
// function ApiCalling(){
//     let API = "https://jsonplaceholder.typicode.com/todos"
//     const [todos,setTodos] = useState([]);
    
//     useEffect(function(){
//         async function calling(){
//             let data = await axios.get(API)
//             // console.log(data.data);
//             setTodos(data.data)
//         }
//         calling()
//     } , [])
    
//     return(
//         <div>
//             {
//                 todos.map( (item)=>{
//                     return(
//                         <div>
//                             <h1>ID: {item.id} </h1>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Completed: { JSON.stringify(item.completed) } </h1>
//                         </div>
//                     ) 
//                 } )
//             }
//         </div>
//     )
// }
// export default ApiCalling;

// ---------------------------------------------------------


// import { useEffect, useState } from "react"
// import axios from 'axios';
// function ApiCalling(){
//     let API = "https://jsonplaceholder.typicode.com/todos"
//     const [todos,setTodos] = useState([]);
    
//     useEffect(function(){
//         axios.get(API)
//         .then(function(data){ 
//             console.log(data.data)
//             setTodos(data.data)
//         })
//         .catch(function(err){ console.log(err) })
//     } , [])
    
//     return(
//         <div>
//             {
//                 todos.map( (item)=>{
//                     return(
//                         <div>
//                             <h1>ID: {item.id} </h1>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Completed: { JSON.stringify(item.completed) } </h1>
//                         </div>
//                     ) 
//                 } )
//             }
//         </div>
//     )
// }
// export default ApiCalling;

// // ---------------------------------------------------------

// import { useEffect, useState } from "react"
// function ApiCalling(){
//     let API = "https://jsonplaceholder.typicode.com/todos"
//     const [todos,setTodos] = useState([]);
    
//     useEffect(function(){
//         async function calling(){
//             let resp = await fetch(API)
//             let data = await resp.json()
//             setTodos(data)
//         }
//         calling()
//     } , [])
    
//     return(
//         <div>
//             {
//                 todos.map( (item)=>{
//                     return(
//                         <div>
//                             <h1>ID: {item.id} </h1>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Completed: { JSON.stringify(item.completed) } </h1>
//                         </div>
//                     ) 
//                 } )
//             }
//         </div>
//     )
// }
// export default ApiCalling;

// ------------------------------------------------------

// import { useEffect, useState } from "react"
// function ApiCalling(){
//     let API = "https://jsonplaceholder.typicode.com/todos"
//     const [todos,setTodos] = useState([]);
    
//     useEffect(function(){
//         fetch(API)
//         .then(function(resp){ return resp.json() })
//         .then(function(data){ 
//             console.log(data , "then")
//             setTodos(data) 
//         })
//         .catch(function(err){ console.log(err , "catch") })
//     } , [])
    
//     return(
//         <div>
//             {
//                 todos.map( (item)=>{
//                     return(
//                         <div>
//                             <h1>ID: {item.id} </h1>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Completed: { JSON.stringify(item.completed) } </h1>
//                         </div>
//                     ) 
//                 } )
//             }
//         </div>
//     )
// }
// export default ApiCalling;

// ------------------------------------------------------------

// import { useState } from "react"
// function ApiCalling(){
//     let API = "https://jsonplaceholder.typicode.com/todos"
//     const [todos,setTodos] = useState([]);
//     fetch(API)
//     .then(function(resp){ return resp.json() })
//     .then(function(data){ 
//         console.log(data , "then")
//         setTodos(data) 
//     })
//     .catch(function(err){ console.log(err , "catch") })

//     return(
//         <div>
//             {
//                 todos.map( (item)=>{
//                     return(
//                         <div>
//                             <h1>ID: {item.id} </h1>
//                             <h1>Title: {item.title} </h1>
//                             <h1>Completed: { JSON.stringify(item.completed) } </h1>
//                         </div>
//                     ) 
//                 } )
//             }

//         </div>
//     )
// }
// export default ApiCalling;