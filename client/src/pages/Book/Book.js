import React, { Component } from 'react'

import { Jumbotron } from '../../components/Jumbotron'
import { Input, SubmitBtn, TextArea } from '../../components/Form'
import API from '../../utils/API'
import { DeleteBtn } from '../../components/DeleteBtn'

class Book extends Component {
  state = {
    title: '',
    author: '',
    synopsis: '',
    books: []
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    API.getBooks().then(res => {
      this.setState({
        books: res.data
      })
    })
  }

  deleteBook = id => {
    API
      .deleteBook(id)
      .then(res => this.loadBooks());
  }

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    })
    .then(res => this.loadBooks());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Jumbotron>What Books Should I Read</Jumbotron>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Synopsis (required)"
            />
            <SubmitBtn onClick={this.handleFormSubmit}>Submit</SubmitBtn>
          </div>
          <div className="col-md-6">
            <Jumbotron>Books on my list</Jumbotron>
            <ul className="list-group">
              {this.state.books.map(book => (
                <li key={book._id} className="list-group-item"><a href={'/book/' + book._id}>
                  {book.title} by {book.author}
                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                
                </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Book
