let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d8c7cc21&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            console.log(resp);
        })
    }
    return false;
}

getCard = () => {
    let card = document.createElement("div").setAttribute("class","card");
    let imgCartaz=document.createElement("img").setAttribute("scr", this.cartaz);
    imgCartaz.setAttribute("class","card-img-top");
    let cardBody = document.createElement("dis").setAttribute("class", "card-body");
    let hCardTitle=document.createElement("h5").setAttribute("class", "card-title");
}
