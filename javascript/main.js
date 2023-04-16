window.onload = function() {
    dir_list();
}

function dir_list() {
    const container = document.getElementById("container");
    // Insira aqui o caminho do diretório que deseja listar
    const dir = "document/";
    fetch(dir)
        .then(resposta => resposta.text())
        .then(texto => {
            const linhas = texto.split("\n");
            for (let i = 0; i < linhas.length; i++) {
                const div = document.createElement("div");
                div.innerHTML = linhas[i];
                container.appendChild(div);
            }
        });
}