import React from 'react';
import styled from 'styled-components';


const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 35em;
  width: 25em;
  border: 2px solid black;
  margin-bottom: 1em;
`;

// const CardImage = styled.img`
//    object-fit: cover;
//    height: 20em;
// `;

const Overview = styled.p`
  padding: 1em;  
`;

function Person(props) {
    //console.log(props);
    return (
        <PersonContainer>
            {/* <CardImage src={props.poster} alt={props.title} />
            <h1>{props.title}</h1>
            <Overview>{props.overview}</Overview> */}
            <h1>Person</h1>
            <h1>{props.id}</h1>
        </PersonContainer>
    );
}


export default Person;
