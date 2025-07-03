
function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome.trim() === '' || email.trim() === '' || assunto.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }


    return true;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';
}

function enviarFeedback() {
 
    if (validarFormulario()) {
        alert('Obrigado pelo seu feedback!');
        
        limparFormulario();

       
        setTimeout(function () {
            window.location.href = 'cardapio.html';
        }, 2000);
    }
}