import './cssFolder/App.css';
import { useState } from 'react';
// import { MyAwesomeComponent  } from './MyAwesomeComponent';
import { Form  } from './weekFour/form';

import Model from './components/modal';
import FetchingData from './useFunctions/featchData';


function App() {

  const [formDisplay, setFormDisplay] = useState(false);
  const [dataDisplay, setDisplayData] = useState(false);

  const clearForm = () =>{
    setFormDisplay(false);
    setDisplayData(false);
  };
  const displayForm = () =>{
    setFormDisplay(true);
  };

  const displayData = () =>{
    setDisplayData(true);
  }


  return(
    // this is where the component will go for my 
    <div>
      {/* <MyAwesomeComponent ></MyAwesomeComponent > */}
      {/* {formDisplay && <FetchingData />} */}
      {/* <Form></Form> */}
      <button onClick={displayForm}>Fill out form</button>
      <button onClick={displayData}>Check Form Data</button>
      {formDisplay && (
        <Model onClose={clearForm}>
          <Form />
        </Model>
      )}

      {/* {dataDisplay && <FetchingData />} */}
      {dataDisplay && (<Model onClose={clearForm}> <FetchingData /> </Model>)}




    </div>
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
