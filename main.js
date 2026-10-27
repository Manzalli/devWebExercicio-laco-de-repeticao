const nomes = ["Gustavo", "Manzalli", "Cury", "Tozatto"]
const lista = document.getElementById("lista")

for (let nome of nomes){
    lista.innerHTML += `<li>${nome}</li>`  
}

var f = document.getElementById ('form')

f.addEventListener ("submit", function (e){
    e.preventDefault();
    var inserirNome = document.getElementById('texto').value;
    var botao = document.getElementById ('botao')
    lista.innerHTML += `<li>${inserirNome}</li>`  
})