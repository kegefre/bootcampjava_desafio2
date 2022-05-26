import { clientes } from "./clientes.js";
import { produtos } from "./produtos.js";

window.onload = function () {
  const menuList = document.querySelectorAll("#menu");
  const secClientes = document.querySelector("#secClientes");
  const secProdutos = document.querySelector("#secProdutos");
  const btnFechar = document.querySelectorAll(".btnFechar");
  const secs = document.querySelectorAll("section");

  btnFechar.forEach(function (btn) {
    btn.addEventListener("click", (elemento) => {
      //console.log(elemento.target.dataset);
      switch (elemento.target.dataset.btn) {
        case "clientes":
          secClientes.style.display = "none";
          break;
        case "produtos":
          secProdutos.style.display = "none";
          break;
        case "pedidos":
          secPedidos.style.display = "none";
          break;
      }
    });
  });

  menuList.forEach(function (item) {
    item.addEventListener("click", (elemento) => {
      //console.log(elemento.target.dataset);
      switch (elemento.target.dataset.item) {
        case "1":
          limpaSec();
          secClientes.style.display = "block";
          showCli(1);
          break;
        case "2":
          limpaSec();
          secProdutos.style.display = "block";
          showPro(1);
          break;
        case "3":
          limpaSec();
          secPedidos.style.display = "block";
          break;
      }
    });
  });

  function limpaSec() {
    secs.forEach((sec) => {
      sec.style.display = "none";
    });
  }
  //Input painel clientes
  const codigoCli = document.querySelector("#codigoCli");
  const nomeCli = document.querySelector("#nomeCli");
  const dataCli = document.querySelector("#dataCli");

  //Botões painel clientes
  const btnAnteriorCli = document.querySelector("#anteriorCli");
  const btnProximoCli = document.querySelector("#proximoCli");
  const btnNovoCli = document.querySelector("#novoCli");
  const btnSalvarCli = document.querySelector("#salvaCli");

  //Input painel produtos
  const codigoPro = document.querySelector("#codigoPro");
  const descricaoPro = document.querySelector("#descricaoPro");
  const precoPro = document.querySelector("#precoPro");
  const quantidadePro = document.querySelector("#quantidadePro");

  //Botões painel produtos
  const btnAnteriorPro = document.querySelector("#anteriorPro");
  const btnProximoPro = document.querySelector("#proximoPro");
  const btnNovoPro = document.querySelector("#novoPro");
  const btnSalvarPro = document.querySelector("#salvaPro");

  //Input painel pedidos
  const codigoCliPed = document.querySelector("#codigoCliPed");
  const nomeCliPed = document.querySelector("#cliPed");
  const codigoProPed = document.querySelector("#codigoProPed");
  const precoPed = document.querySelector("#precoPed");
  const produtoPed = document.querySelector("#produtoPed");
  const quantidadePed = document.querySelector("#quantidadePed");

  //Form Produto Painel pedido
  const formProd = document.querySelectorAll("#formProPed input");

  //Botões painel pedidos
  const btnLancar = document.querySelector("#lancarPed");

  //tabela pedido
  const tabelaPedido = document.querySelector("#tabelaPedido tbody");

  //total
  let divTotal = document.querySelector("#total");

  //Funcoes e eventos clientes

  btnAnteriorCli.addEventListener("click", () => {
    let index = codigoCli.value;
    if (index == 1) {
      alert("Fim de registro.");
    } else {
      index--;
      showCli(index);
    }
  });

  btnProximoCli.addEventListener("click", () => {
    let index = codigoCli.value;
    if (index >= clientes.length) {
      alert("Fim do registro de clientes.");
    } else {
      index++;
      showCli(index);
    }
  });

  btnNovoCli.addEventListener("click", () => {
    let codCli = clientes.length + 1;
    codigoCli.value = codCli;
    nomeCli.value = "";
    const d = new Date();
    dataCli.value = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  });

  btnSalvarCli.addEventListener("click", () => {
    if (nomeCli.value.length < 1) {
      alert("Preencha o campo nome!");
      return;
    }
    if (codigoCli.value > clientes.length) {
      let novoCli = {
        codCliente: Number(codigoCli.value),
        nomeCliente: nomeCli.value,
        dataCadCli: dataCli.value,
      };
      clientes.push(novoCli);
      alert("Dados cadastrados com sucesso!");
    } else {
      alert("Clique em Novo para inserir um Registro");
    }
  });

  function showCli(i) {
    i--;
    codigoCli.value = clientes[i].codCliente;
    nomeCli.value = clientes[i].nomeCliente;
    dataCli.value = clientes[i].dataCadCli;
  }

  //Funcoes e eventos Produtos

  btnAnteriorPro.addEventListener("click", () => {
    let index = codigoPro.value;
    if (index == 1) {
      alert("Fim de registro.");
    } else {
      index--;
      showPro(index);
    }
  });

  btnProximoPro.addEventListener("click", () => {
    let index = codigoPro.value;
    if (index >= produtos.length) {
      alert("Fim do registro de produtos.");
    } else {
      index++;
      showPro(index);
    }
  });

  btnNovoPro.addEventListener("click", () => {
    let codPro = produtos.length + 1;
    codigoPro.value = codPro;
    descricaoPro.value = "";
    precoPro.value = "";
    quantidadePro.value = "";
  });

  btnSalvarPro.addEventListener("click", () => {
    if (descricaoPro.value.length < 1) {
      alert("Preencha o campo descrição!");
      return;
    }
    if (precoPro.value.length < 1) {
      alert("Preencha o campo preço!");
      return;
    }
    if (quantidadePro.value.length < 1) {
      alert("Preencha o campo quantidade!");
      return;
    }
    if (codigoPro.value > produtos.length) {
      let novoPro = {
        codProduto: Number(codigoPro.value),
        descProduto: descricaoPro.value,
        precoProduto: precoPro.value,
        qtdEstoqueProd: quantidadePro.value,
      };
      produtos.push(novoPro);
      alert("Dados cadastrados com sucesso!");
    } else {
      alert("Clique em Novo para inserir um Registro");
    }
  });

  function showPro(i) {
    i--;
    codigoPro.value = produtos[i].codProduto;
    descricaoPro.value = produtos[i].descProduto;
    precoPro.value = produtos[i].precoProduto.toFixed(2);
    quantidadePro.value = produtos[i].qtdEstoqueProd;
  }

  //Funcoes e eventos Pedidos
  function buscaCli(codigo) {
    let objCli = clientes.find((cli, index, array) => cli.codCliente == codigo);
    return objCli;
  }

  function buscaPro(codigo) {
    let objPro = produtos.find((pro, index, array) => pro.codProduto == codigo);
    return objPro;
  }

  codigoCliPed.addEventListener("blur", (elemento) => {
    let cliente = buscaCli(elemento.target.value);
    if (cliente !== undefined) {
      cliPed.value = cliente.nomeCliente;
    } else {
      if (elemento.target.value.length > 0) {
        nomeCliPed.value = "";
        elemento.target.value = "";
        elemento.target.focus();
        alert("Cliente não existente!");
      }
    }
  });

  codigoProPed.addEventListener("blur", (elemento) => {
    let produto = buscaPro(elemento.target.value);
    if (produto !== undefined) {
      produtoPed.value = produto.descProduto;
      precoPed.value = produto.precoProduto.toFixed(2);
    } else {
      if (elemento.target.value.length > 0) {
        produtoPed.value = "";
        precoPed.value = "";
        quantidadePed.value = "";
        elemento.target.value = "";
        elemento.target.focus();
        alert("Produto não existente!");
      }
    }
  });

  let pedidoTotal = 0;
  let itensPedido = [];

  lancarPed.addEventListener("click", () => {
    let dadosPed = [];
    let classes = ["tbItem", "tbDesc", "tbPreco", "tbQtd", "tbSub"];
    let i = 0;
    let produto = buscaPro(codigoProPed.value);
    if (produto === undefined) {
      return;
    }

    if (quantidadePed.value.length <= 0) {
      alert("Preecha com uma quantidade válida.");
      return;
    }

    if (itensPedido.indexOf(codigoProPed.value) != -1) {
      alert("Item já incluido no pedido");
      return;
    }

    if (quantidadePed.value > produto.qtdEstoqueProd) {
      alert("Esta quantidade excede o valor em estoque.");
      return;
    }

    itensPedido.push(produto.codProduto.toString());

    for (let campo in produto) {
      if (campo == "precoProduto") {
        dadosPed.push(
          '<td class="' +
            classes[i] +
            '">' +
            Number(produto[campo]).toFixed(2) +
            "</td>"
        );
        i++;
      } else {
        dadosPed.push(
          '<td class="' + classes[i] + '">' + produto[campo] + "</td>"
        );
        i++;
      }
    }

    dadosPed.pop();
    dadosPed.push(
      '<td class="' + classes[i - 1] + '">' + quantidadePed.value + "</td>"
    );
    let subTotal = Number(quantidadePed.value) * Number(produto.precoProduto);

    dadosPed.push(
      "<td class='" + classes[i] + "'>" + subTotal.toFixed(2) + "<td>"
    );
    let tr = document.createElement("tr");
    pedidoTotal += subTotal;
    let indice = produtos.findIndex(
      (prod, index, array) => prod.codProduto == produto.codProduto
    );
    produto.qtdEstoqueProd -= quantidadePed.value;
    produtos[indice] = produto;
    divTotal.innerHTML = Number(pedidoTotal.toFixed(2)).toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );

    tabelaPedido.appendChild(tr).innerHTML = dadosPed.join("");
  });
};
