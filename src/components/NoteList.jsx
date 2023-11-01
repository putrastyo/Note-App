import NoteCard from "./NoteCard"

const NoteList = ({notes, set, date}) => {
  const onDelete = (id) => {
    const noteDel = notes.filter(note => note.id != id)
    set(noteDel)
  }
  return (
    <div className="note-list">
      {
        notes.length
        ? notes.map(note => <NoteCard data={note} onDelete={onDelete} key={note.id} date={date}/>)
        : <h5>Tidak ada catatan.</h5>
      }
    </div>
  )
}

export default NoteList