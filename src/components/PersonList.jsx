import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import Person from './Person';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddPerson from './Form/AddPerson';

const PersonListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

function PersonList() {

  const [person, setPerson] = useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    //axios.get('https://localhost:7026/api/person')
    axios.get('https://localhost:7026/api/person/'+ page)
      .then((response) => {
        console.log(response.data);
        setPerson(response.data);
       
      })
      .catch((error) => {
        console.error('Could not load data:', error);
      });
  }, [page]);

  
  //console.log(person);
  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  }
  const prevPage = () => {
      setPage((prevState) => prevState - 1);
  }

  return (
      <>
          <h1>PersonList</h1>
          
          <button disabled={page === 1} onClick={prevPage}>PREV PAGE</button>
          <button onClick={nextPage}>NEXT PAGE</button><br/><br/>
          <PersonListContainer>
            <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
              </tr>
                {person.map((p) => (
                    <tr  key={p.id}>
                      <td> 
                          <Link to={`/person/${p.id}`}>
                            Name: {p.firstName + " " +p.lastName} 
                          </Link>
                        </td>
                      <td>{p.emailAddress}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <AddPerson />
          </PersonListContainer>
      </>
  );
}

export default PersonList;