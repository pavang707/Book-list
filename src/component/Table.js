import React from 'react'
import  Tablefield  from "./Tablefield";
const Table = ({books,removebook,editbook}) => {
    return (
        <div className="table">
            <div className="tableHeading">
                <Tablefield fieldName="title"/>
                <Tablefield fieldName="author"/>
                <Tablefield fieldName="isbn"/>
                <Tablefield fieldName="settings"/>
        </div>
        {books.map((book)=>{
            return(
                <div key={book.bookId} className="tableRow">
                    <Tablefield fieldName={book.bookTitle}/>
                    <Tablefield fieldName={book.bookAuthor}/>
                    <Tablefield fieldName={book.bookisbn}/>
                    <Tablefield settingfield 
                    removebook ={()=>{removebook(book.bookId)}}
                    editbook={()=>{editbook(book)}}
                    />
                     


                    </div>
            )
        })}
        </div>
    )
}

export default Table
