etch("http://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) 
  .then((user) => {
    console.log(user);
  })