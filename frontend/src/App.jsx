import { Button, Container } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <Container maxW='620px'>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Container>
  )
}

export default App