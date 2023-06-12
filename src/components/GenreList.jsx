import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddGenre from './Form/AddGenre';

const GenreListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

// Styles for tabke

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

function GenreList() {

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    // Get all genre
    axios.get('https://localhost:7026/api/genre')
      .then((response) => {
        // Get response from server
        console.log(response.data);
        setGenre(response.data);
       
      })
      .catch((error) => {
        console.error('Could not load data:', error);
      });
  }, []);

  return (
      <>
          <h1>GenreList</h1>
          <GenreListContainer>
            <StyledTable>
              <TBody>
                <TR>
                  <TH>Title</TH>
                  <TH>Description</TH>
                </TR>
                  {genre.map((g) => (
                      <TR  key={g.id}>
                        <TD>{g.title}</TD>
                        <TD>{g.description}</TD>
                      </TR>
                  ))}
              </TBody>
            </StyledTable>
            {/* Add genre  */}
            <AddGenre/>
          </GenreListContainer>
      </>
  );
}

export default GenreList;