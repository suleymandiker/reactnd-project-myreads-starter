import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import getAll from './data'

/* const api = "https://reactnd-books-api.udacity.com" */


class BooksApp extends Component {
  state = {
    books: getAll,
  };

	componentDidMount() {
          console.log(this.state.books)
	}
  render() {
    return (
      <div className="app">
	 <Route exact path="/" component={BookList} />
	 <Route path="/search" component={BookSearch} />
      </div>
    )
  }
}

class BookList extends Component {
   render() {
	   const { bookshelves } = this.props;
     return(
          <div className="list-books">
	     <div className="list-books-title">
	        <h1>MyReads</h1>
	     </div>
	     </div>

     )
   }
}

const Bookcase = props => {
   const { bookshelves } = props;
   return(
     <div className="list-books-content">
	   <div>
	     { bookshelves.map(shelf => (<Bookshelf key={shelf.key} shelf={shelf} /> )) }
	   </div>
	   </div>
   )

}

const Bookshelf = props => {
  const { shelf } = props;
  return (
     <div className="bookshelf">
	<h2 className="bookshelf-title">shelf.name</h2>
	  <div className="bookshelf-books">
	  <ol className="books-grid">
	    <Book book={{}} />
	  </ol>
	  </div>
	  </div>
  )
}


const Book = props => {
  const { book } = props;
  return (
     <li>
	  <div className="book">
	    <div className="book-top">
	      <div className="book-cover" 
	         style={{
			width: 128,
			height: 193,
			backgroundImage:
			 'url("http://books.google.com/books/content?id=PGR2Aw...")',
		 }}
	  />
	  <BookshelfChanger />
	  </div>
	  <div className="book-title">To Kill a Mockingbird</div>
	  <div className="book-authors">Harper Lee</div>
	  </div>
     </li>
  );
};

class BookshelfChanger extends Component {
  render() {
    return (
       <div className="book-shelf-changer">
	    <select>
	       <option value="move" disabled>
	           Move to...
	       </option>
	       <option value="currentlyReading">Currently Reading</option>
	       <option value="wantToRead">Want to Read</option>
	       <option value="read">Read</option>
	       <option value="none">None</option>
	    </select>
	    </div>

    );
  }

}


class BookSearch extends Component {
   render() {
     return(
        <div className="search-books">
	    b  {/* UI code */}
	</div>
     )
   }
}

export default BooksApp
