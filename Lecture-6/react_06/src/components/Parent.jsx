// send data from child to parent

function Parent(){
    let data = "Samarth"
    function handleClick(data2){
        console.log(data2);
    }
    return(
        <div>
            <Child name={data}  handleClick={handleClick} />
        </div>
    )
}

function Child({name, handleClick}){
    let data2 = "Dummy name from child"
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={()=>handleClick(data2)} >click</button>
        </div>
    )
}
export default Parent