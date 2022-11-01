
export default function addDataApi(method, path, data) {
    let objFetch = {}
    if(method === 'GET' || method === 'DELETE'){
        objFetch = {
            method
          }
    }else{
        objFetch = {
            method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
          }
    }
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/item" + path
        fetch(url, objFetch)
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}