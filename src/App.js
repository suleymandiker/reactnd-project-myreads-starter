import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import getAll from './data'

/* const api = "https://reactnd-books-api.udacity.com" */


class BooksApp extends Component {
   bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Have Read' },
  ];

  state = {
    books: getAll,
  };

	componentDidMount() {
          console.log(this.state.books)
	}
  
   render() {
     const { books } = this.state;
    return (
      <div className="app">
         <Route exact path="/" render={() => (
            <ListBooks
		 bookshelves={this.bookshelves}
		 books={books}
		 onMove={this.moveBook}
		 />
	 )}
	    />
      </div>
    );
  }
}



class ListBooks extends Component {
   render() {
	   const { bookshelves, books  } = this.props;
     return(
          <div className="list-books">
	     <div className="list-books-title">
	        <h1>MyReads</h1>
	     </div>
	     <Bookcase bookshelves={bookshelves} books={books}/>
	     </div>

     )
   }
}

const Bookcase = props => {
   const { bookshelves, books } = props;
   return(
     <div className="list-books-content">
	   <div> 
	      { bookshelves.map(shelf => (
		     <Bookshelf key={shelf.key} shelf={shelf} books={books} />
	     ))} 
	   </div>
	   </div>
   );

};

const Bookshelf = props => {
  const { shelf, books } = props;
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  return (
     <div className="bookshelf">
	<h2 className="bookshelf-title">{shelf.name}</h2>
	  <div className="bookshelf-books">
	  <ol className="books-grid">
	  {booksOnThisShelf.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} />
	  ))}
	  </ol>
	  </div>
	  </div>
  );
};


const Book = props => {
  const { book, shelf  } = props;
  return (
     <li>
	  <div className="book">
	    <div className="book-top">
	      <div className="book-cover" 
	         style={{
			width: 128,
			height: 193,
			backgroundImage:
			 `url(${book.imageLinks.thumbnail})`,
		 }}
	  />
	  <BookshelfChanger book={book} shelf={shelf}  />
	  </div>
	  <div className="book-title">{book.title}</div>
	  <div className="book-authors">{book.authors.join(',')}</div>
	  </div>
     </li>
  );
};

class BookshelfChanger extends Component {
	state = {
             value: this.props.shelf,
	};

	handleChange= event => {
           this.setState({ value: event.target.value });
	   this.props.onMove(this.props.book, event.target.value); 
	};
  render() {
    return (
       <div className="book-shelf-changer">
	    <select value={this.state.value} onChange={this.handleChange}>
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
