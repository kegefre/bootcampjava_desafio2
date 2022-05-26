import { clientes } from "./clientes.js";
window.onload = function () {
  const botao = document.querySelector("#btn");
  const usuarioInput = document.querySelector("#usuario");
  const senhaInput = document.querySelector("#senha");

  function checkin(dadosUser) {
    let encontrado=false;
    let senhaCheck=false;
    for (let usuarios in dadosUser) {
      for (let usuario of dadosUser[usuarios]) {
        console.log(usuario);
        if (usuario.user == usuarioInput.value) {
          encontrado = true;
          if(usuario.pws==senhaInput.value){
            senhaCheck=true;
          }
          break;
        }
      }
      if (encontrado) {
        if(senhaCheck){
          location.href='panel.html';
        }else{
          alert("Senha incorreta!")
        }
      } else {
        alert("Usuário não encontrado!");
      }
    }
  }

  let usuariosFetch = async function () {
    let url = "usuario.json";
    let dadosJson = "";
    try {
      let dados = await fetch(url);
      let dadosJson = await dados.json();
      checkin(dadosJson);

      //return dadosJson;
    } catch (error) {
      alert(error);
    }
  };

  botao.addEventListener("click", function (evento) {
    usuariosFetch();
  });
};
//window.addEventListener('load',main);
