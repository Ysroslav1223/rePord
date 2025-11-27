import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainImg } from './components/main-img/mainImg'
import { Privacy } from './components/privacy/privacy'

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<MainImg/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      

    
      
    </Routes>
  )
}

export default App
