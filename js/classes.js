class Ator
{
    constructor(id, nome){
        this.id=id;
        this.nome=nome;
    }
}
//
class Diretor {
    constructor(id, nome){
      this.id = id;
      this.nome = nome;
    }
}
//
class Filme {
  constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
    this.id = id;
    this.titulo = titulo;
    this.ano = ano; 
    this.genero = genero;
    this.duracao = duracao;
    this.cartaz = cartaz;
    this.sinopse = sinopse;
    this.direcao = direcao;
    this.elenco = elenco;
    this.classificacao = classificacao;
    this.avaliacao = avaliacao;
    this.btnDetalhes = null;
  }
  // Metodo que gera os card com os filmes que retornam na busca da api;
  getCard = async() => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 285px; height: 530px; margin: 0.5%; align-self: center;");

    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class", "card-img-topz");
    imgCartaz.setAttribute("src", this.cartaz);
    // Add a fixed size for the image
    imgCartaz.setAttribute("style", "width: 100%; height: 100%; object-fit: cover;");
  
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.setAttribute("style", "margin: 0.5%");
  
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class", "card-title");
    // Reduce font size for movie title
    hCardTitle.setAttribute("style", "height: 40px; width: 100%; font-size: 1rem;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
  
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
  
    let divGenero = document.createElement("div");
    divGenero.setAttribute("style", "flex-grow:1;");
    // Reduce font size for movie genre
    divGenero.setAttribute("style", "font-size: 1rem;");
    divGenero.appendChild(document.createTextNode(this.genero));
  
    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("style", "flex-grow:1;");
    // Reduce font size for movie year
    divAnoProducao.setAttribute("style", "font-size: 1rem;");
    divAnoProducao.appendChild(document.createTextNode(this.ano));
  
    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style", "flex-grow:1;");
    // Reduce font size for movie classification
    divClassificacao.setAttribute("style", "font-size: 1rem;");
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
  // Metodo usado para quando o usuario clicar no botão detalhes, exiba o filme em que o mesmo está clicando retornando a ele os detalhes do mesmo
  getDetalhesFilme = () => {
    let detalhesCard = document.createElement("div");
    detalhesCard.setAttribute("class", "card mb-3");
    detalhesCard.setAttribute("style", "max-width: 540px;");

    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row g-0");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "col-md-4");

    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("src", this.cartaz);
    imgCartaz.setAttribute("class", "img-fluid rounded-start");
    imgDiv.appendChild(imgCartaz);

    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "col-md-8");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class", "card-title");
    hCardTitle.appendChild(document.createTextNode(this.titulo));

    let pCardText = document.createElement("p");
    pCardText.setAttribute("class", "card-text");
    pCardText.appendChild(document.createTextNode(this.sinopse));

    let pCardText2 = document.createElement("p");
    pCardText2.setAttribute("class", "card-text");
    pCardText2.appendChild(document.createTextNode(`Gênero: ${this.genero} | Ano: ${this.ano} | Classificação: ${this.classificacao}`));

    let pCardText3 = document.createElement("p");
    pCardText3.setAttribute("class", "card-text");
    pCardText3.appendChild(document.createTextNode(`Diretor: ${this.diretor} | Elenco: ${this.elenco}`));

    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(pCardText);
    cardBody.appendChild(pCardText2);
    cardBody.appendChild(pCardText3);

    detailsDiv.appendChild(cardBody);
    rowDiv.appendChild(imgDiv);
    rowDiv.appendChild(detailsDiv);
    detalhesCard.appendChild(rowDiv);

    return detalhesCard;
}
  
getBtnDetalhes = () => {
  return this.btnDetalhes;
}

setBtnDetalhes = () => {  
  this.btnDetalhes = document.createElement('button');
  this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
  this.btnDetalhes.setAttribute("id", this.id);
  this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
}

}