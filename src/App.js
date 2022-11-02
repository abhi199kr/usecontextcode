import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import College from './College';

const Name=createContext()
const score=createContext()
function App() {
 
  return (
    <>
    <Name.Provider value={"Abhishek"}>
      <score.Provider value={99}>
      <College/>
        
      </score.Provider>
    </Name.Provider>

    </>
   
  );
}

export default App;
export {Name,score};