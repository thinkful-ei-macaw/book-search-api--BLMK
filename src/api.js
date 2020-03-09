const url = 'https://www.googleapis.com/books/v1/volumes?';

function getBooks(query) {
  console.log(query);
  return fetch(url + query)
    .then(res => res.json())
    .then(data => {
      return data;
    })
}   

export default {getBooks} ;