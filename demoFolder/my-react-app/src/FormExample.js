import React, { useState } from 'react';

export const SignUpForm = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [display, setDisplay] = useState('Not valed');

    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleEmailChange = (event) =>{


        setEmail(event.target.value)

        if(isValidEmail(event.target.value)){
            // setEmail(event.target.value)
            setDisplay("Your email is valed")
        }
        




    }

    const clearForm = () =>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setDisplay("NOT valed")
    };

    return(
        <div>
            <label className='form-label'>First Name</label>
            <input
                type='text'
                value={firstName}
                onChange={(event)=> setFirstName(event.target.value)}
            ></input>

            <label className='form-label'>last Name</label>
            <input
                type='text'
                value = {lastName}
                onChange={(event) => setLastName(event.target.value)}
            ></input>

            <label className='form-label'>Email</label>
            <input type="email" value={email} onChange={handleEmailChange}></input>


            {handleEmailChange && <button onClick={clearForm} className="button">Submit</button>}

            <p>your email is {email}</p>
            <p>Your email is {display}</p>

        </div>


    )


}


export default SignUpForm;