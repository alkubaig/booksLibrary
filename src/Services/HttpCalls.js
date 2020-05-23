const baseURL = "https://library-book-server.herokuapp.com/"
// const baseURL = "http://localhost:5000"

export function getBooksHTTP(props){

  fetch(baseURL + "books")
    .then(res => res.json())
    .then(
      (result) => {
        props.success(result)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        props.fail(error)
      }
    )
}

export function deleteBookHTTP(props){

  fetch(baseURL + "book/" + props.id,
    {method: 'DELETE'})
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
        return props.success()
      } else {
        throw Error(response.statusText);
      }
    }).catch(error => {
      props.fail(error)
    });
}

export function createBookHTTP(props){


  fetch(baseURL + "book/",
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props.newBook)
    })
    .then(
      (response => {
        console.log(response);
        if (response.status >= 200 && response.status <= 299) {
          return props.success()
        } else {
          throw Error(response.statusText);
        }
      }))
      .catch(error => {
          props.fail(error)
        });
}


export function updateBookHTTP(props){

  fetch(baseURL + "book/" + props.newBook.id,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props.newBook)
    })
    .then(
      (response => {
        console.log(response);
        if (response.status >= 200 && response.status <= 299) {
          return props.success()
        } else {
          throw Error(response.statusText);
        }
      }))
      .catch(error => {
          props.fail(error)
        });
}
