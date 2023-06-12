import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import PersonList from './components/PersonList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Person from './components/Person';
import GenreList from './components/GenreList';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
`;

const StyledPara = styled.p`
  max-width: 20em;
`;

function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        {/* Nevigation bar for the site  */}
        <Navbar/>

        {/* Routes for the site */}
        <Routes>
          <Route path ="/" element={<PersonList />}/>
          <Route path ="/person/:id" element={<Person />}/>
          <Route path ="/genre" element={<GenreList />}/>
          <Route path ="*" element={<Error />}/>

        </Routes>
      </BrowserRouter>
  )
}

export default App
