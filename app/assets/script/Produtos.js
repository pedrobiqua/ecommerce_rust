var url_base = "http://localhost:8080";
getNotes();

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('form_notes');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obter os valores dos campos do formulário
        var title = document.getElementById("frm_title").value;
        var content = document.getElementById("frm_content").value;

        // Fazer algo com os dados
        addNote(title, content);
        
        // Atualizar a lista de produtos
        getNotes();

        // Limpar o formulário (opcional)
        form.reset();
    });
});
  


function addNote(title, content) {
    const data = {
        title: title,
        content: content,
        category: "Drama"
    };

    
    fetch(url_base + "/api/notes/", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Objeto criado:', data);
    })
    .catch(error => {
        console.error('Erro ao criar o objeto:', error);
    });
}

function getNotes() {

    fetch(url_base + "/api/notes", {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        addNotesInHtml(data);
    })
    .catch(error => {
        console.error('Erro ao criar o objeto:', error);
    });

}

function addNotesInHtml(data){
    console.log(data);
    var notes = document.getElementById("notes");
    notes.innerHTML = "";
    data.notes.forEach(element => {
        notes.innerHTML += "<div class='col-md-3 mt-2'>" +
        "<div class='card'>" + 
        "<div class='card-body'>" +
        "<h3 class='card-title'>" + element.title + "</h3>" +
        "<p class='card-text'>" + "Conteúdo: " + element.content + "</p>" +
        "<p class='card-text'>" + "Categoria: " + element.category + "</p>" +
        "</div>" +
        "</div>" +
        "</div>";
    });
}