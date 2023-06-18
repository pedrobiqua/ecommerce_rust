// Fazer requisição básica
var url_base = "http://localhost:8080";
fetch(url_base + "/api/healthchecker", {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        // Adicione quaisquer outros headers necessários aqui
    }
})
.then(response => response.json())
.then(data => {
    document.getElementById("title").innerHTML = data.message;
})
.catch(error => console.log(error));