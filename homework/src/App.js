import './App.css';
import React, { useState } from 'react';


import { TotalItems } from './MyAwesomeComponent';

// import SignUpForm from './form.js';

function App() {

  const [formDisplay, setFormDisplay] = useState(false);

  const clearForm = () =>{
    setFormDisplay(false)
  }

  return(
    // this is where the component will go
    <>
      <div>Temp</div>
      <TotalItems></TotalItems>
    </>
  );

  // return (
  //   <div>
  //     <div className='formDisplay'>
  //       {/* <button onClick={console.log("hi")}>Display Form</button> */}
  //       <button className='assignmentMakeButton' onClick={()=>{setFormDisplay(true)}}>Add new assignment</button>
  //       {formDisplay && <SignUpForm clearFormDisplay={clearForm}></SignUpForm>}
  //     </div>
  //   </div>
  // );
}

export default App;
