import React, { useEffect, useState } from 'react'
import Parent from './components/Parent';

function App() {
  return (
    <div>
      {/* <Counterr /> */}
      <Parent />
    </div>
  )
}
export default App


function Counterr() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    if(count === 0){
      console.log("componentDidMount()");
    }
    else if(count>=1 && count<=5){
      console.log("componentDidUpdate()");
    }
    // cleanup fn
    if(count === 6){
      return ()=>{ console.log("componentWillUnmount") }
    }
  }, [count])

  return (
    <div>
      <h1>Hello from - {count}</h1>
      <button onClick={()=>setCount(count+1)} >Click</button>
    </div>
  )
}




// -------- CLASS BASED COMPONENTS ----------
// import React from 'react'
// import Counter from './components/Counter';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       count: 0,
//     }
//   }
//   decrease() {
//     this.setState({count: this.state.count - 1})
//   }
//   componentDidMount(){
//     console.log("hello");
//   }

//   componentWillUnmount(){
//     console.log("component is removed");
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={()=>this.setState({count: this.state.count+1})}>Increment</button>
//         {/* <h1>{this.state.count}</h1> */}
//         <Counter count={this.state.count} />
//         <button onClick={this.decrease.bind(this)} >Decrement</button>
//       </div>
//     )
//   }
// }
// export default App