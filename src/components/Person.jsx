import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import AddPersonChoice from './Form/AddPersonChoice';


const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;


function Person() {
    const {id} = useParams();

    const [personChoicedata, setpersonChoicedata] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [name, setName] = useState([]);
 
    useEffect(() => {
      // get persons favourite movies 
      axios.get(`https://localhost:7026/api/personchoice/{personid}?id=${id}`)
          .then((response) => {
            setpersonChoicedata((data) => {
          return response.data;
        });
      });
    }, []);

    // get all genre
    useEffect(() => {
      axios.get(`https://localhost:7026/api/genre`)
          .then((response) => {
            setGenreData((setgenreData) => {
          return response.data;
        });
      });
    }, []);


    // get all persons 
    useEffect(() => {
      axios.get('https://localhost:7026/api/person')
        .then((response) => {
          //console.log(response.data);
          const person = response.data.find((person) => person.id == id);
          setName(person.firstName + " " + person.lastName);
         
        })
        .catch((error) => {
          console.error('Could not load data:', error);
        });
    }, [id]);

    return (
      
      <PersonContainer>
          <h1> {name} </h1>
          <h1> Favourite movie list </h1>

          <table>
            <tbody>
              <tr>
                <th>Genre</th>
                <th>Rating</th>
                <th>Movie link</th>
              </tr>
                {personChoicedata.map((p) => (
                    <tr key={p.id}>
                      <td> 
                        {/*Show genre title instead of Id  */}
                        {genreData.find(g=> g.id == p.genreId).title} 
                      </td>
                      <td> 
                          {p.rating} 
                      </td>
                      <td>{p.movieLink}</td>
                    </tr>
                ))}
              </tbody>
          </table>
          {/* Add person favourite movie  */}
          <AddPersonChoice />
        </PersonContainer>
    );
}


export default Person;
