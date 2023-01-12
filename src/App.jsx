import { useState } from 'react'
import './assets/css/App.css'

import ProfileImage from './Components/ProfileImage'
import CardBody from './Components/CardBody'
import CardFooter from './Components/CardFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='application'>
      <div className="main-wrapper">
        <ProfileImage />
        <CardBody />
        <CardFooter />
      </div>
    </main>
  )
}

export default App
