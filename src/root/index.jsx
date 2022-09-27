import React from 'react'
import Container from '../Layout/Container'
import { Routes, Route} from 'react-router-dom';
import { navbar } from '../utils/navbar'
import Header from '../components/Header';

const Root = () => {
  return (
    <Container>
      <Header/>
      <Routes>
        {navbar.map((item) => 
          <Route key={item.id} path={item.path} element={item.Element}/>
        )}
      </Routes>
    </Container>
  )
}

export default Root