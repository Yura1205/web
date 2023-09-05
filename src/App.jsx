import './App.css'
import Badge from 'react-bootstrap/Badge';
import {Routes, Route }  from 'react-router-dom';
import { Login } from './pages/Login';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
