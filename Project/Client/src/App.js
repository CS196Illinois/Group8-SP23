import React, {useState, useEffect} from "react"
import LoanCalculator from './Pages/LoanCalculator';
import PostForm from "./Pages/PostForm";

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
      {/* <LoanCalculator /> */}
      {}
        </div>
  )
}

export default App