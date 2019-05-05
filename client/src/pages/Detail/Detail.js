import React, { Component } from 'react'
import { Jumbotron } from '../../components/Jumbotron'
import API from '../../utils/API';

class Detail extends Component {
  state = {
    book: {}
  }

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>{this.state.book.title} by {this.state.book.author}</Jumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>Synopsis</h1>
            <p>{this.state.book.synopsis}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
