// DOM

// let rootEl = document.getElementById('root');

// let p = document.createElement('p');
// p.innerHTML = "Hello from DOM"

// rootEl.appendChild(p)

// --------------------------------------------

// React

// let root = document.getElementById('root');
// // props = attributes 
// let p = React.createElement('p' , {id: "para", className: "samarth"} , "Hello from React" )

// let rootEl = ReactDOM.createRoot(root)

// rootEl.render(p)

// --------------------------------------------

// <div>
//     <div id="sam">
//         <p>hello para 1</p>
//         <h1>hello heading 1</h1>
//     </div>
// </div>



// let root = document.getElementById('root');

// let divv = React.createElement('div', {}, React.createElement('div', {id:"sam"} , [
//     React.createElement('p' , {} , "hello Para 1"),
//     React.createElement('h1', {} , "hello Heading 1")
// ] ) )

// let rootEl = ReactDOM.createRoot(root)

// rootEl.render(divv)

// --------------------------------------------


let root = document.getElementById('root');

// JSX = JS + HTML
let divv =  <div>
                <div id="sam">
                    <p>hello para 1</p>
                    <h1>hello heading 1</h1>
                </div>
            </div>

let rootEl = ReactDOM.createRoot(root)

rootEl.render(divv)

