import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import Person from './Person';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

function PersonList() {

  const [person, setPerson] = useState([]);

  

  useEffect(() => {
    axios.get('https://localhost:7026/api/person')
      .then((response) => {
        console.log(response.data);
        setPerson(response.data);
       
      })
      .catch((error) => {
        console.error('Could not load data:', error);
      });
  }, []);

  console.log(person);

    return (
        <>
            <h1>PersonList</h1>
            <PersonListContainer>
                
                {person.map((p) => (
                    <Link to={`/person/${p.id}`} key={p.id}>
                        <h3>Name: {p.firstName + " " +p.lastName}</h3>
                        <h3>Name: {p.emailAddress}</h3>
                        <Person title={p.id} />
                    </Link>
                ))}
                
            </PersonListContainer>
        </>
    );
}

export default PersonList;