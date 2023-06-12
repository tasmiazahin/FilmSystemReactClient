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


// Styles for table 
const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const TBody = styled.tbody`
 // custom css goes here
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const TH = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TD = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

function PersonList() {

  const [person, setPerson] = useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    //Query to get all person.
    //axios.get('https://localhost:7026/api/person')
    // Query persons based on page number 
    axios.get('https://localhost:7026/api/person/'+ page)
      .then((response) => {
        // Response from the server
        console.log(response.data);
        setPerson(response.data);
       
      })
      .catch((error) => {
        console.error('Could not load data:', error);
      });
  }, [page]);

  // Next page
  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  }

  // Previous page
  const prevPage = () => {
      setPage((prevState) => prevState - 1);
  }

  return (
      <>
          <h1>PersonList</h1>
          {/* Disable previous button on page number 1 */}
          <button disabled={page === 1} onClick={prevPage}>PREV PAGE</button>
          <button onClick={nextPage}>NEXT PAGE</button><br/><br/>
          <PersonListContainer>
            <StyledTable>
              <TBody>
                <TR>
                  <TH>Name</TH>
                  <TH>Email Address</TH>
                </TR>
                  {person.map((p) => (
                      <TR  key={p.id}>
                        <TD> 
                            <Link to={`/person/${p.id}`}>
                              Name: {p.firstName + " " +p.lastName} 
                            </Link>
                          </TD>
                        <TD>{p.emailAddress}</TD>
                      </TR>
                  ))}
                  </TBody>
              </StyledTable>
              {/*  Add person*/}
              <AddPerson />
          </PersonListContainer>
      </>
  );
}

export default PersonList;