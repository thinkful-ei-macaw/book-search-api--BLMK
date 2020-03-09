const url = 'https://www.googleapis.com/books/v1/volumes?';

function getBooks(query) {
  return fetch(url + query)
    .then(res => res.json())
    .then(data => {
      return data;
    })
  .catch(err => {
    alert(`Error: ${err}`)
  })
}   

export default {getBooks} ;