import './cssFolder/App.css';
// import React, { useState } from 'react';


import { MyAwesomeComponent  } from './MyAwesomeComponent';


function App() {

  // const [formDisplay, setFormDisplay] = useState(false);
  // const clearForm = () =>{
  //   setFormDisplay(false)
  // }

  return(
    // this is where the component will go for my 
    <>
      <MyAwesomeComponent ></MyAwesomeComponent >
    </>
  );

  // this is the signup form,
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
