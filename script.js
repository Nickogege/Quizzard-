const nomeCadastro = document.getElementById("nome")
const emailCadastro = document.getElementById("email")
const senhaCadastro = document.getElementById("senha")
const btnCadastro = document.getElementById("btnRegistrar");


const emailLogin = document.getElementById("loginEmail")
const senhaLogin = document.getElementById("loginSenha")
const btnLogin = document.getElementById("btnLogin")

let usuario = JSON.parse(localStorage.getItem("usuarios")) || []
btnCadastro.addEventListener("click", function() {
    let valorNomeCadastro = nomeCadastro.value
    let valorEmailCadastro = emailCadastro.value
    let valorSenhaCadastro = senhaCadastro.value

    cadastro = {
        nome: valorNomeCadastro,
        email: valorEmailCadastro,
        senha: valorSenhaCadastro
    }

    usuario.push(cadastro)
    localStorage.setItem("usuarios", JSON.stringify(usuario))
    alert("Cadastro realizado com sucesso!")
})

btnLogin.addEventListener("click", function() {
    let valorEmailLogin = emailLogin.value
    let valorSenhaLogin = senhaLogin.value
    let usuario = JSON.parse(localStorage.getItem("usuarios")) || []

    const existe = usuario.find(function(cadastro) {
        return cadastro.email === valorEmailLogin && cadastro.senha === valorSenhaLogin
    })

    if(existe) {
        window.location.href = "home.html"
    }
})
