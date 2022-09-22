import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1><Mobile></Mobile> </h1>
      
    </div>
  );
}



const Mobile = () => {
  const [charges ,setCharge]=useState(100)
  
    const Charge=()=>{
      if(charges===0){
        alert('Ekta Thappor Diya Dat Falai Dimo. Phone Charge a de')
        // setCharge=charges
        return
      }
      else{
        const totalCharge = charges-10
        setCharge(totalCharge)
        }
      }

  return (
    <div>
      
       <h1>Charges:{charges}%</h1>
        <button onClick= {Charge}  className='battary'>Battary Down</button>
      
    </div>
  );
};



export default App;
