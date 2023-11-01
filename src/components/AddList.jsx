import { useState } from "react"

const AddList = ({data, set}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(title == '' || body == '') return false
  
    const currentData = [...data]
    
    const lastId = data.length ? data[data.length-1].id+1 : 1
    const newData = {
      id: lastId,
      title: title,
      body: body,
      archived: false,
      createdAt: new Date()
    }
    currentData.push(newData)
    set(currentData)
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Note</h3>
      <br />
      <input
        placeholder="Buat judul"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <textarea
        rows="10"
        placeholder="deskripsi..."
        value={body}
        onChange={e => setBody(e.target.value)}
      >
      </textarea>
      <br />
      <button type="submit">+ Buat</button>
    </form>
  )
}

export default AddList