import React, { useState } from 'react';
import './firstForm.css';

export const SignUpForm = (props) =>{


    const [assignment, setAssignment] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignedClass, setAssignedClass] = useState('');


    const [errorDisplay, setErrorDisplayAssignment] = useState('');
    const [errorDisplayDate, setErrorDisplayDate] = useState('');
    const [errorDisplayClass, setErrorClass] = useState('');

    const [errorFormSubmit, setErrorFormSubmit] = useState('');

    // this is whats making the values valed, its just regex looking for anything but numbers
    const regex = /^([^0-9]*)$/

    // hopfuly if all the user data is valed it will be true across the board allowing the user to contune
    const [valedData, setValedData] = useState({
        assignmentCheck: false,
        date: false,
        className : false
    });

    // this just clears the form, it removes all the values
    const clearForm = () =>{
        setAssignment('');
        setDueDate('');
        setAssignedClass('');
        // the assignment one does not work for some reasion, i cant find the error
        setValedData({...valedData, assignmentCheck: false})
        setValedData({...valedData, data: false})
        setValedData({...valedData, className: false})
    };

    // this is checking the value from assignment and setting the value. If the eneted value has an invlad charter it will not add 
    const checkValedAssignment = (value) => {
        if(regex.test(value)){
            setAssignment(value);
            setValedData({...valedData, assignmentCheck: true})
            setErrorDisplayAssignment('');
        }else{
            setAssignment(value);
            setErrorDisplayAssignment("You have entered an invaled charter.");
            setValedData({...valedData, assignmentCheck: false})
        }
    }



    // this is to check a vales data
    const checkValedDate = (value) => {
        // converts the value into a date object
        const date = new Date(value);
        // this is than checking to see if the inputed date is grater than or is now
        if(date >= Date.now()){
            setDueDate(value);
            setValedData({...valedData, date: true})
            setErrorDisplayDate('');
        }else{
            setDueDate(value);
            setErrorDisplayDate("You must enter a valed date.");
            setValedData({...valedData, date: false})
        }
    }

    // this is for the class name
    const checkValedClass = (value) => {
        if(regex.test(value)){
            setAssignedClass(value);
            setValedData({...valedData, className: true})
            setErrorClass('');
        }else{
            setAssignedClass(value);
            setErrorClass("You have entered an invaled charter.");
            setValedData({...valedData, className: false})
        }
    }
    // this is the checker for the submit, if all the values are true than the form will submit
    const checkAllData = () => {
        if(valedData.assignmentCheck && valedData.date && valedData.className){
            setErrorFormSubmit('');
            props.clearFormDisplay();
            clearForm();
        }else{
            setErrorFormSubmit("Sorry you have a error in your form.");
        }
    }



    // this is the form
    return(
        <div className="wholeForm">
            {/* this is the assignment */}
            <label className='form-label'>Assignment</label>
            <input
                type='text'
                value={assignment}
                onChange={(event)=> checkValedAssignment(event.target.value)}
            ></input>

            <div className='errorDisplay'>
                {errorDisplay}
            </div>


            {/* this is the due date */}
            <label className='form-label'>Due Date</label>
            <input
                type='date'
                value = {dueDate}
                onChange={(event) => checkValedDate(event.target.value)}
            ></input>

            <div className='errorDisplay'>
                {errorDisplayDate}
            </div>            


            {/* this is for the assigned class */}
            <label className='form-label'>Assigned Class</label>
            <input
                type='text'
                value={assignedClass}
                onChange={(event) => checkValedClass(event.target.value)}
            ></input>

            <div className='errorDisplay'>
                {errorDisplayClass}
            </div> 


            <button onClick={()=>clearForm()} className="buttonClear">Clear</button>
            <button onClick={()=>checkAllData(valedData)} className="button">Submit</button>
            
            <div className='errorDisplay'>
                {errorFormSubmit}
            </div>

            

        </div>
    )
}


export default SignUpForm;