import axios from 'axios';

export default {

  getBooks: () => {
    return axios.get('/api/book/');
  },

  getBook: id => {
    return axios.get('/api/book/' + id);
  },

  deleteBook: id => {
    return axios.delete('/api/book/' + id);
  },

  saveBook: bookData => {
    return axios.post('/api/book', bookData);
  }
}