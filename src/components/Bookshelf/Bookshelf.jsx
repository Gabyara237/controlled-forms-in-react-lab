import { useState } from "react";

const Bookshelf = () =>{

    const [books, setBooks] =  useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setNewBook({ ...newBook, [name]: value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setBooks([...books, newBook]);
        setNewBook({ title: "", author: "" })
    }

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        id="title" 
                        type="text"
                        name="title"
                        value = {newBook.title}
                        onChange={handleInputChange}    
                    />
                    <label htmlFor="author">Author: </label>
                    <input 
                        id="author"
                        type="text"
                        name="author"  
                        value={newBook.author}
                        onChange={handleInputChange}  
                    />
                    <button type="submit" >Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {
                    books.map((book, idx)=>(
                        <div key={idx} className="bookCard">
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                        </div>

                    ))

                }

            </div>
        </div>
    )
}

export default Bookshelf;