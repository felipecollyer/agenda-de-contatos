const form = document.getElementById("form-agenda");
let linhas = "";
let totalContatos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLinhas();
  atualizarTabela();
  atualizarNumeroDeContato();
});

function addLinhas() {
  const inputNome = document.getElementById("nome-contato");
  const inputNumero = document.getElementById("numero-contato");

  if (totalContatos.includes(inputNome.value)) {
    alert(`Contato: ${inputNome.value} ja inserido`);
  } else {
    totalContatos.push(inputNome.value);

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }
  inputNome.value = "";
  inputNumero.value = "";
}

function atualizarTabela() {
  const corpoTabelaTbody = document.querySelector("tbody");
  corpoTabelaTbody.innerHTML = linhas;
}

function atualizarNumeroDeContato() {
  document.getElementById("total-contato").innerHTML = totalContatos.length;
}
