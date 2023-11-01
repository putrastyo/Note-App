const NoteCard = ({data, onDelete, date}) => {
  const createdAt = data.createdAt;
  const days = [
    'Minggu', 'Senin', 'Selasa', 'Rabu', 
    'Kamis', 'Jumat', 'Sabtu'
  ];
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 
    'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const handleDelete = () => onDelete(data.id)

  return (
  <div className="card-note">
    <div className="note-header">
      <h4>{data.title}</h4>
      {/* <small>{`${days[createdAt.getDay()]}, ${createdAt.getDate()} ${months[createdAt.getMonth()]} ${createdAt.getFullYear()}`}</small> */}
      <small>{`${date(createdAt)}`}</small>
    </div>
    <div className="note-body">
      <p>{data.body}</p>
    </div>
    <div className="action">
      <button onClick={handleDelete}>Hapus</button>
    </div>
  </div>
  )
}

export default NoteCard