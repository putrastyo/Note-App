import { useState } from 'react'
import { getInitialData, showFormattedDate } from './utils'
import Header from './components/Header'
import AddList from './components/AddList'
import NoteList from './components/NoteList'

function App() {
  const APP_NAME = 'Note App'
  const [notes, setNotes] = useState(getInitialData())
  
  return (
    <section>
      <Header title={APP_NAME}/>
      <main>
        <AddList data={notes} set={setNotes} />
        <NoteList notes={notes} set={setNotes} date={showFormattedDate} />
      </main>
    </section>
    
  )
}

export default App
