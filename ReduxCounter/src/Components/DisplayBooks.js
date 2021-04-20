import { Component } from "react";


class DisplayBooks extends Component {


    render() {

        const books = this.props.books
        const bookList = books.map((book) => {

            return <div className='oneBook' key={book.id}>
                <p>{book.title}</p>
                <p>{book.genre}</p>
                <p>{book.publisher}</p>
                <p>{book.year}</p>
                <p><img className='image' src={book.imageURL} alt={book.title}/></p>


            </div>
        })

        return (
            <div>

                <div className="books">
                    {bookList}

                </div>

            </div>


        )
    }
}

export default DisplayBooks