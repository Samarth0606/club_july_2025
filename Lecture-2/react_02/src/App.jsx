// component = function

import Pillow, { Bag, Bed } from "./components/Pillow"; //named via destructuring
import {Samarth} from './components/samarth'


// component
function App(){
  return (
    <div>
      <h1>Hello from Samarth</h1>
      <Samarth />
      <Pillow />
      <Bed />
      <Bag />
    </div>
  )
}

export default App;


// ----------------

//component
// function Sam(){
//   return(
//     <div>
//       <h1>Sam here</h1>
//     </div>
//   )
// }

// export default Sam;
