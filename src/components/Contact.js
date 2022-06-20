function Contact({ id, pictureUrl, name, popularity, wonOscar, wonEmmy, handleDelete }){
    return (
      <div className= "display">
        <img src={pictureUrl} className="contactPic" alt="no-img"/>
        <p>{name}</p>
        <p>{popularity.toFixed(2)}</p>
        {wonOscar && <p>X</p>}
        {wonEmmy && <p>X</p>}
        <button onClick={() => handleDelete(id)} className="deleteBtn" >Delete contact 🗑</button>
    </div>  
    )
} 

export default Contact;