import React, { useState } from 'react'
import './App.css'
import CircleSelector from './components/CircleSelector'
import Circles from './components/Circles'


function App() {

  const [circleSelected, setCircleselected] = useState(0)
  const [circles] = useState([1, 2, 3, 4])

  const handleSelected = idx => {
    setCircleselected(idx)
  }
  return (
    <div className="App">
      <header className="App-header">Unit 3 Assessment</header>
      <main>
        <CircleSelector
          circleSelected={circleSelected}
          circles={circles}
          handleSelected={handleSelected}
        />
        <Circles
          circleSelected={circleSelected}
          circles={circles}
          handleSelected={handleSelected}
        />
      </main>
    </div>
  )
}

export default App