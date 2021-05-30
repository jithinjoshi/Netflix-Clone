import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import Rowpost from './Components/Rowpost/Rowpost'
import {Originals,Action,Comedy} from './urls'


function App() {
 
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost urls={Originals} title="Netflix Originals"  />
      <Rowpost urls={Action} title="Action" isSmall />
      <Rowpost urls={Comedy} title="Comedy" isSmall />
      
      
    </div>
  )
}

export default App
