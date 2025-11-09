import Bro from "./components/Bro";
import Dsa from "./components/Dsa";
import Master from "./components/Master";
import Person from "./components/Person";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Web from "./components/Web";

function App(){
  let arr1 = ["samarth" , "vohra" , "maverick" , "kashish"]
  let arr2 = ["studen1", "student2"]

  return(
    <div>
      <h1>Welcome to APP</h1>

      <Master tname="Sam" sname={arr1} />
      <Master tname="Gourav" sname={arr2} />

      {/* <Bro arry={arr} /> */}


      {/* <Web topic1="HTML" topic2="CSS" topic3="JS" topic4="REACT"  />
      <Dsa topic1="ARRAYS" topic2="TC/SC" topic3="Stack/Queue"  /> */}


        {/* <Teacher name="Samarth" domain="WEB"  />
        <Teacher name="Gourav"  domain="DSA" />
        <Student name="Ayush Verma" age={24} />
        <Student name="Pramod Gangwar" age={21} />
        <Student name="Aastha Dixit" age={22} />
        <Student name="SAURABH GONDANE" age={23} /> */}


        {/* <Person name="Aastha" age={20} isMale={false} />
        <Person name="Mohmmed" age={21} isMale={true} />
        <Person name="Samarth" age={99} isMale={true} /> */}
    </div>
  )
}

export default App;