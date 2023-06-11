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

function GenreList() {

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7026/api/genre')
      .then((response) => {
        console.log(response.data);
        setGenre(response.data);
       
      })
      .catch((error) => {
        console.error('Could not load data:', error);
      });
  }, []);

  console.log(genre);
  return (
      <>
          <h1>GenreList</h1>
          <GenreListContainer>
            <table>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Description</th>
              </tr>
                {genre.map((g) => (
                    <tr  key={g.id}>
                      <td>{g.title}</td>
                      <td>{g.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <AddGenre/>
          </GenreListContainer>
      </>
  );
}

export default GenreList;