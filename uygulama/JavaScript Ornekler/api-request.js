const jsonURL = "https://jsonplaceholder.typicode.com/posts"
const jsonURL1 = "https://jsonplaceholder.typicode.com/posts/1"

//get request addEventListener
// const getRequest = (url) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET",url)
//     xhr.addEventListener("readystatechange",()=> {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 const response = JSON.parse(xhr.responseText)
//                 console.log(response);
//             }
//             else{
//                 console.log(`${xhr.status} - Couldn't fetch the data`);
//             }
//         }
//     });
//     xhr.send();
// }

// getRequest(jsonURL);


// get request onreadystatechange

const getReq = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET",url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                console.log(response);
            }
            else{
                console.log(`${xhr.status} - Couldn't fetch the data`);
            }
        }
    }
    xhr.send()
}

getReq(jsonURL)

// post request

const data = {
    userId: 999,   
    title: "Toronto",
    completed: true
}

const post = JSON.stringify(data)

const postRequest = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST",url)
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                
                console.log(xhr.response);
            }
            else{
                console.log(`${xhr.status} - Couldn't fetch the data`);
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
    xhr.responseType="json";
    xhr.send(post);
}

postRequest(jsonURL);

//put request 
const data2 = {
    userId: 2,   
    title: "Kanada",
    completed: true
}
const put = JSON.stringify(data2)
const putRequest = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open("PUT",url)
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                
                console.log(xhr.response);
            }
            else{
                console.log(`${xhr.status} - Couldn't fetch the data`);
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
    xhr.responseType="json";
    xhr.send(put);
}
putRequest(jsonURL1)

// pacth request 
data2.title="Raptors"
const pacth = JSON.stringify(data2)

const patchRequest = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open("PATCH",url)
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                
                console.log(xhr.response);
            }
            else{
                console.log(`${xhr.status} - Couldn't fetch the data`);
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
    xhr.responseType="json";
    xhr.send(pacth);
}
patchRequest(jsonURL1)

//DELETE request

const deleteRequest = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open("DELETE",url)
    xhr.onreadystatechange=() =>{
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                
                console.log(xhr.response);
                console.log("Deleted");
            }
            else{
                console.log(`${xhr.status} - Couldn't fetch the data`);
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/json; chartset=utf-8");
    xhr.responseType="json";
    xhr.send();
}
deleteRequest(jsonURL1)