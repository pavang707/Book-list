import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Form from './component/Form'
import  Table  from "./component/Table";


const App=()=> {
  const [title,settitle]=useState('')
  const [author,setauthor]=useState('')
  const [isbn,setisbn]=useState('')
  const [currentbookid,setcurrentbookid]=useState('')
  const [books,setbooks]=useState([
    {bookTitle:"title",
    bookAuthor:"john",
    bookisbn: "13215",
    bookId:uuidv4()
    }
  ])

const isinputinvalid=()=>{
  return(
    title.trim() ==="" || author.trim()==="" || isbn.trim()===""
  )
}
const clearinput=()=>{
  settitle("")
  setauthor("")
  setisbn("")
}
const addbook=()=>{
  setbooks([...books,
  {
    bookTitle:title,
    bookAuthor:author,
    bookisbn:isbn,
    bookId:uuidv4()
  }
  ])
}
const editbook=(book)=>{
  settitle(book.bookTitle)
    setauthor(book.bookAuthor)
    setisbn(book.bookisbn)
    setcurrentbookid(book.bookId)
    
}
const updatebook=()=>{
  setbooks(books.map(book=> book.bookId===currentbookid ? {...books,bookTitle:title,bookAuthor:author,bookisbn:isbn} : book))
}


const removebook=(id)=>{
  setbooks(books.filter(book=>book.bookId !== id))
}
const canceledit=()=>{
  clearinput()
  setcurrentbookid("")
}
const handleSubmit= e =>{
   e.preventDefault()
   clearinput();
   setcurrentbookid(null)
  if(isinputinvalid()) return;
  !currentbookid ? addbook() : updatebook()
  
  }

  return (
    
    <div className="App">
     <div className="container">
       <Form
       title={title}
       settitle={settitle}
       author={author}
       setauthor={setauthor}
       isbn={isbn}
       setisbn={setisbn}
       currentbookid={currentbookid}
       handleSubmit={handleSubmit}
       canceledit={canceledit}
       />
     <Table
     books={books}
     title={title}
     author={author}
     isbn={isbn}
     removebook={removebook}
     editbook={editbook}
     />
     </div>
    
    </div>
  );
}

export default App;
