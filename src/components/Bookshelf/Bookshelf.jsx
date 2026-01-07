import { useState } from "react";

const Bookshelf = () =>{

    const [books, setBooks] =  useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setNewBook({[name]: value});
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
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )
}

export default Bookshelf;