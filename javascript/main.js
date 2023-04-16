function dir_list() {
    const container = document.getElementById("container");
    const diretorio = "document/";
    fetch(diretorio)
        .then(resposta => resposta.text())
        .then(texto => {
            const linhas = texto.split("\n");
            const div = document.createElement("div");
            for (let i = 0; i < linhas.length; i++) {
                div.innerHTML += linhas[i] + "<br>";
            }
            container.appendChild(div);
        });
}

window.onload = function() {
    dir_list();
}