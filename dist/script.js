var grifinoria = {
  nome: "Grifinória",
  vitorias : 5,
  empates: 4,
  derrotas: 3,
  pontos: 0
}
var sonserina = {
  nome:"Sonserina",
  vitorias : 6,
  empates: 4,
  derrotas: 8,
  pontos: 0
}
var lufaLufa = {
  nome: "Lufa-Lufa ",
  vitorias : 3,
  empates: 2,
  derrotas: 7,
  pontos: 0
}

var corvinal = {
  nome: "Corvinal",
  vitorias : 4,
  empates: 2,
  derrotas: 3,
  pontos: 0
}

grifinoria.pontos = calculaPontos(grifinoria)
sonserina.pontos = calculaPontos(sonserina)
lufaLufa.pontos = calculaPontos(lufaLufa)
corvinal.pontos = calculaPontos(corvinal)

function calculaPontos(timeDeQuadribol){
  var pontos = (timeDeQuadribol.vitorias *3) + timeDeQuadribol.empates
  return pontos
}

var casasDeHogwarts = [grifinoria, sonserina, lufaLufa, corvinal]

exibirCasasNaTela(casasDeHogwarts)
function exibirCasasNaTela(casasDeHogwarts){
  var html = ""
  for(var i = 0; i < casasDeHogwarts.length; i++){ 
        html += "<tr><td>" + casasDeHogwarts[i].nome + "</td>"
        html += "<td>" + casasDeHogwarts[i].vitorias + "</td>"
        html += "<td>" + casasDeHogwarts[i].empates + "</td>"
        html += "<td>" + casasDeHogwarts[i].derrotas + "</td>"
        html += "<td>" + casasDeHogwarts[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
 
}
function adicionarVitoria(i) {
    var timeDeQuadribol = casasDeHogwarts[i]
    timeDeQuadribol.vitorias++
    timeDeQuadribol.pontos = calculaPontos(timeDeQuadribol)
    exibirCasasNaTela(casasDeHogwarts)
}

function adicionarEmpate(i) {
    var timeDeQuadribol = casasDeHogwarts[i]
    timeDeQuadribol.empates++
    timeDeQuadribol.pontos = calculaPontos(timeDeQuadribol)
    exibirCasasNaTela(casasDeHogwarts)
}

function adicionarDerrota(i) {
    var timeDeQuadribol = casasDeHogwarts[i]
    timeDeQuadribol.derrotas++
    exibirCasasNaTela(casasDeHogwarts)
}