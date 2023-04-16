import React, {useState, useEffect} from "react"
import LoanCalculator from './LoanCalculator';
import PostForm from "./PostForm";

function App() {
  
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8000/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
    
  return (
      <div>
      <PostForm />
      <LoanCalculator />

      
        {/* {(typeof data.members == 'undefined') ? (
          <p>Loading...</p>
        ): 
        (
          data.members.map((member, i) => (
            <p key = {i}> {member}</p>
          ))
        )
        } */}
        </div>
  )
}

export default App