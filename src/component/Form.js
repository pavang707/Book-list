import React from 'react'

const Form = ({title,settitle,author,setauthor,isbn,setisbn,currentbookid,handleSubmit,canceledit}) => {
    return (
    <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input 
        type="text"
        value={title}
        onChange={e=>settitle(e.target.value)}

        />
        <label >Author</label>
        <input type="text"
        required
        value={author}
        onChange={e=>setauthor(e.target.value)}
        />
        <label >isbn</label>
        <input type="text"
        required 
        value={isbn}
        onChange={e=>setisbn(e.target.value)}
        />
    <button tabIndex="0" type="submit">

        {currentbookid !==null ? "update" : "Add"}
    </button>
    {currentbookid !==null && <button onClick={canceledit}>Cancel</button>}
    </form>
        
    )
}

export default Form
