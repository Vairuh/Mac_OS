import { useState } from 'react'
import "./app.scss"
import Dock from './components/docs'
import Nav from './components/Nav'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'

function App() {

  const [windowstate, setwindowstate] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav />
      <Dock windowstate={windowstate} setwindowstate={setwindowstate} />
      {windowstate.github && <Github windowname="github" setwindowstate={setwindowstate}/>}
      {windowstate.note && <Note windowname="note" setwindowstate={setwindowstate}/>}
      {windowstate.resume && <Resume windowname="resume" setwindowstate={setwindowstate}/>}
      {windowstate.spotify && <Spotify windowname="spotify" setwindowstate={setwindowstate}/>}
      {windowstate.cli && <Cli windowname="cli" setwindowstate={setwindowstate}/>}
    </main>
  )
}

export default App
