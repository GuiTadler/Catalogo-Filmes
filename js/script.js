let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d8c7cc21&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        });
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = document.querySelector("#lista-filmes");
    if (listaFilmes !== null) {
        listaFilmes.style.display ="flex";
        listaFilmes.innerHTML = "";
    }
    let mostrarFilme = document.querySelector("#mostrar-filme");
    if (mostrarFilme !== null) {
        mostrarFilme.innerHTML="";
        mostrarFilme.style.display = "nome";
    }
    if(filmes.length > 0) {
        filmes.forEach(async(filme) =>{
          console.log(filme);
          listaFilmes.appendChild(await filme.getCard());
          filme.getBtnDetalhes().onclick=()=>{
            detalhesFilme(filme.id);
          }
        });
    }
}

let btnSalvar = document.createElement('button');
btnSalvar.appendChild(document.createTextNode('Salvar'));
btnSalvar.setAttribute('id', 'btnSalvar');
divDetalhes.appendChild(btnSalvar);

let btnFechar = document.createElement('button');
btnSalvar.appendChild(document.createTextNode('Fechar'));
btnFechar.setAttribute('id', 'btnFechar');
divDetalhes.appendChild(btnFechar);

let detalhesFilme = async (id) =>{
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d8c7cc21&i="+id)
  .then((resp)=> resp.json())
  .then((resp)=> {
      console.log(resp);
      let filme=new Filme(
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.split(","),
        resp.Runtime,
        resp.Poster,
        resp.plot,
        resp.Director,
        resp.Actors.split(","),
        resp.Awards,
        resp.imdbRating
      )
      console.log(filme);
      document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());

      document.querySelector("btnFechar").onclick = () => {
      }
      document.querySelector("#lista-filme").style.display="none";
      document.querySelector("#mostrar-filme").style.display="flex";
  });
}

