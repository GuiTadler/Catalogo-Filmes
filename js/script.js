let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = async () => {
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
    let listarFilmes = await document.querySelector("#lista-filmes");
    listarFilmes.innerHTML = "";
    //console.log(listarFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) =>{
          console.log(filme);
          listarFilmes.appendChild(await filme.getCard());
          filme.getBtnDetalhes().onclick=()=>{
            detalhesFilme(filme.id);
          }
        });
    }
}

let detalhesFilme = async (id) =>{
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d8c7cc21&i="+id)
  .then((resp)=> resp.json())
  .then((resp)=> {
      // instannciar objeto da classe filme

      // Chamar metodo para gerar card com detalhes do filme.

      // ocultar div #lista-filmes
  });
}

setBtnDetalhes = () => {  
    this.btnDetalhes = document.createElement('button');
    this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
    this.btnDetalhes.setAttribute("id", this.id);
    this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
}

getBtnDetalhes = () => {
  return this.btnDetalhes;
}

getCard = async () => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-topz");
    imgCartaz.setAttribute("scr",this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class", "card-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-around;");
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style", "flex-grow:1;");
    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("style", "flex-grow:1;");
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style", "flex-grow:1;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoProducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoProducao);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());

    return card;
}