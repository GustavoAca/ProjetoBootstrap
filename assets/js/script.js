//declarando váriaveis
let senha1 = document.querySelector(".em1")
let senha2 = document.querySelector(".em2")
let erro = document.querySelector("#txError")
let visualizar1 = document.querySelector(".visu1")
let visualizar2 = document.querySelector(".visu2")
let btSenha = document.querySelector("#botaoSenha")

let emailPass = false;
let senhaPass = false;




function verSenha() {
  //se o conteudo da senha for diferente da senha 2
  if (senha1.value !== senha2.value) {
    //aparecerá uma mensagem de senha divergente
    erro.innerHTML = "Senhas divergentes"
    erro.style.color = "red"
  }
  else {
    //se não ele fica em branco
    erro.innerHTML = ""
    //se passar ele mostra true
    emailPass = true;
    senhaPass = true
  }
}

function mostraSenha() {
//se o checked estiver clicado
  if (btSenha.checked == true) {
    //o tipo do input é text ex: type="text"
    visualizar1.type = "text"
    visualizar2.type = "text"

  } else {
    //senão ele vira password ex: type="password"
    visualizar1.type = "password"
    visualizar2.type = "password"

  }

}

function enviarForm() {
  //se todos os campos estiverem de acordo, ele mostra essa mensagem
  if (senhaPass == true && emailPass == true) {
    alert("Enviado com sucesso")
  }

  else {

    //senão, essa
    alert("Complete os dados!")

  }
}


