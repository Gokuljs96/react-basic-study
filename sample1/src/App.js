import {useState} from 'react'
import Employee from './Employee'


function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
   
}
 let emp =[{name:'gokul',age:23},
 {name:'jayakumar',age:53},
 {name:'anu',age:43},
 ]
 return (
    <div className='App'>

  <button onClick={addCount}>add</button>
    {
      emp.map((obj)=>{
        return(
          <Employee name={obj.name} age={obj.age}/>
        )
      })

    }
   
    
    </div>
  );
}

export default App;

