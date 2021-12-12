
document.getElemenentById("botaoenviar").addEventListern("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value !=  "" && (document.getElementById("email").value !=  "")
    }
    {alert(Pronto! Agora é só aguardar as novidades por email.)}
    else {alert("Por favor, preencha os campos nome e email!")}
}