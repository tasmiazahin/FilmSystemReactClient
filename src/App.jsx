import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import PersonList from './components/PersonList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';

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
          <Navbar/>
        
        <Routes>
          <Route path ="/" element={<PersonList />}/>
          <Route path ="*" element={<Error />}/>

        </Routes>
      </BrowserRouter>
  )
}

export default App
