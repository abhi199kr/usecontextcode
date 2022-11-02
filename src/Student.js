import React, { useContext } from 'react'
import {Name,score} from "./App"

const Student = () => {
    const name=useContext(Name);
    const Score=useContext(score)
    // const score=useContext(score)
  return (
    <div>
      <h3>Welcome to student Dashboard</h3>
      <p>Name:{name}</p>
      <p>Score: {Score}</p>
    </div>
  )
}

export default Student
