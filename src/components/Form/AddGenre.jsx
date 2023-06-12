import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import axios from 'axios';


const FormDiv = styled.div`
    margin-bottom: 10px;
`;

export default function AddGenre() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleTitleChange = (e) =>{
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) =>{
        setDescription(e.target.value);

    }

    const handleSubmit = (e) =>{
        console.log("Form Submitted");
        e.preventDefault();

        axios
        .post('https://localhost:7026/api/Genre', {
            title, description
        })
        .then((response) => {

            // CLear form fields 
            setTitle('');
            setDescription('');
        })
        .catch((error) => {
            console.error('Error while adding person:', error);
        });
    }

  return (
    <div>
        <h1>Add Genre</h1>

        <form action='' onSubmit={handleSubmit}>
            <FormDiv>
                <label htmlFor="title">Enter title: </label>
                <input type="text" name ="title" id="title" value={title}  required onChange={handleTitleChange}/>
            </FormDiv>

            <FormDiv>
                <label htmlFor="description">Enter Description: </label>
                <input type="text" name ="description" id="description" value={description}   onChange={handleDescriptionChange}/>
            </FormDiv>

            <FormDiv>
                <button>Add genre</button>
            </FormDiv>
        </form>
    </div>
    
  )
}
