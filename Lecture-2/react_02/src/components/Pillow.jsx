function Pillow(){
    return(
        <div>
            <h2>Hello from pillow</h2>
        </div>
    )
}

// export function Bed(){
function Bed(){
    return(
        <div>
            <h1>Bed hu mai</h1>
        </div>
    )
}

// export function Bag(){ // named export
function Bag(){
    return(
        <div>
            <h1>Bag hu mai</h1>
        </div>
    )
}

// named export 
export {Bed,Bag}

// export default
export default Pillow;