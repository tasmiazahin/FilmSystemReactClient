import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import axios from 'axios';


const FormDiv = styled.div`
    margin-bottom: 10px;
`;

export default function AddPerson() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");


    const handleFirstNameChange = (e) =>{
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) =>{
        setLastName(e.target.value);

    }
    const handleEmailAddressChange = (e) =>{
        setEmailAddress(e.target.value);

    }

    const handleSubmit = (e) =>{
        console.log("Form Submitted");
        e.preventDefault();

        axios
        .post('https://localhost:7026/api/Person', {
            firstName, lastName, emailAddress
        })
        .then((response) => {
            // CLear form fields 
            setFirstName('');
            setLastName('');
            setEmailAddress('');
        })
        .catch((error) => {
            console.error('Error while adding person:', error);
        });
    }

  return (
    <div>
        <h1>Add person</h1>

        <form action='' onSubmit={handleSubmit}>
            <FormDiv>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name ="firstName" id="firstName" value={firstName}  required onChange={handleFirstNameChange}/>
            </FormDiv>

            <FormDiv>
                <label htmlFor="lasttName">Last Name: </label>
                <input type="text" name ="lastName" id="lasttName" value={lastName}  required  onChange={handleLastNameChange}/>
            </FormDiv>

            <FormDiv>
                <label htmlFor="emailddress">Email : </label>
                <input type="email" name ="emailddress" id="emailddress"  value={emailAddress} required  onChange={handleEmailAddressChange}/>
            </FormDiv>

            <FormDiv>
                <button>Add person</button>
            </FormDiv>
        </form>
    </div>
    
  )
}
