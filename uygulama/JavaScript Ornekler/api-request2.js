const jsonURL = "https://jsonplaceholder.typicode.com/todos"

const newComment = {
    name: "Toronto Leyla",
    email: "example@gmail.com",
    body: "Mailinizi onaylamak için tıklayınız",
  };

const postCommentsThen=() =>{

    return fetch(`${jsonURL}`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

const postCommentAsync = async (url) => {
    const response = await fetch(url,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
    });
    return response.json().then(data => console.log(data));
}

postCommentsThen(newComment);
postCommentAsync(jsonURL);

const getTodoById = async (todoId) => {
    const response = await fetch(`${jsonURL}/${todoId}`)
    const data = await response.json()

    return console.log(data); 
  }

  const getThenId = (todoId) => {
    return fetch(`${jsonURL}/${todoId}`)
    .then(res=> res.json())
    .then(data=> console.log(data))  
  }

  const getTodos = async () => {
    const response = await fetch(jsonURL)
    const data = await response.json()

    return console.log(data); 
  }

  const getThen =  (url) => {
    return fetch(url)
    .then(res=> res.json())
    .then(data=> console.log(data))    
  }
  getThenId(2);
  getTodoById(1);
  getTodos();
  getThen(jsonURL);

  const data2 = {
    userId: 1,   
    title: "Kanada",
    completed: true
}
console.log(data2);
data2.title="Raptors" 
  const pacthCommentThen = (todoId) => {
    return fetch(`${jsonURL}/${todoId}`,{
        method:"PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2)
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
  }

  pacthCommentThen(1);
data2.title="Miami Beach"
  const patchAsync = async todoId => {
    const response = await fetch(`${jsonURL}/${todoId}`,{
        method:"PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2),
    });
    return response.json().then(data => console.log(data));
  }
  patchAsync(1);

data2.userId=11
data2.title="Strasbourg"
data2.completed=false

  const putCommentThen = (todoId) => {
    return fetch(`${jsonURL}/${todoId}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2)
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
  }

  putCommentThen(1);

data2.userId=12
data2.title="Stuttgart"
data2.completed=false
  const putAsync = async todoId => {
    const response = await fetch(`${jsonURL}/${todoId}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2),
    });
    return response.json().then(data => console.log(data));
  }

  putAsync(2);

  const deleteAsync = async(todoId) => {
    const response = await fetch(`${jsonURL}/${todoId}`,{
        method:"DELETE",
        headers: { "Content-Type": "application/json" },
    });
    return response.json().then(data => console.log(data));
  }
  deleteAsync(1);

  const deleteThen = (todoId) => {
    return fetch(`${jsonURL}/${todoId}`,{
        method:"DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
  }

  deleteThen(1);