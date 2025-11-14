import Counter from "./components/Counter";
import Jump3 from "./components/Jump3";
import Logout from "./components/Logout";

function App(){
  return(
    <div>
      <h1>Welcome to App</h1>
      {/* <Logout /> */}
      {/* <Counter /> */}
      <Jump3 />
    </div>
  )
}

// export {App};    // infinite named export
export default App; // better - 1 default export