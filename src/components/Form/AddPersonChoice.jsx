import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import axios from 'axios';


const FormDiv = styled.div`
    margin-bottom: 10px;
`;

export default function AddPersonChoice() {

    const [personId, setPersonId] = useState("");
    const [genreId, setGenreId] = useState("");
    const [movieLink, setMovieLink] = useState("");
    const [rating, setRating] = useState("");


    const handlePersonIdChange = (e) =>{
        setPersonId(e.target.value);
    }

    const handleGenreIdChange = (e) =>{
        setGenreId(e.target.value);

    }
    const handleMovieLinkChange = (e) =>{
        setMovieLink(e.target.value);
    }

    const handleRatingChange = (e) =>{
        setRating(e.target.value);
    }

    const handleSubmit = (e) =>{
        console.log("Form Submitted");
        e.preventDefault();

        axios
        .post('https://localhost:7026/api/PersonChoice', {
            personId, genreId, movieLink, rating
        })
        .then((response) => {
            console.log(response.data);

            // CLear form fields 
            setPersonId('');
            setGenreId('');
            setMovieLink('');
            setRating('');
        })
        .catch((error) => {
            console.error('Error while adding person:', error);
        });
    }

  return (
    <div>
        <h1>Add person's favourite movie</h1>

        <form action='' onSubmit={handleSubmit}>
            <FormDiv>
                <label htmlFor="personId">Enter personId: </label>
                <input type="text" name ="personId" id="personId" value={personId}  required onChange={handlePersonIdChange}/>
            </FormDiv>

            <FormDiv>
                <label htmlFor="genreId">Enter genreId: </label>
                <input type="text" name ="genreId" id="genreId" value={genreId}  required  onChange={handleGenreIdChange}/>
            </FormDiv>

            <FormDiv>
                <label htmlFor="movieLink">Enter movie download link : </label>
                <input type="text" name ="movieLink" id="movieLink"  value={movieLink} required  onChange={handleMovieLinkChange}/>
            </FormDiv>

            <FormDiv>
                <label htmlFor="rating">Enter rating: </label>
                <input type="text" name ="rating" id="rating" value={rating}  required  onChange={handleRatingChange}/>
            </FormDiv>

            <FormDiv>
                <button>Add person choice</button>
            </FormDiv>
        </form>
    </div>
    
  )
}
