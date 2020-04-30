$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 160) {
            $('#btn-top').removeClass('esconde-btn-top');
        }
        else {
            $('#btn-top').addClass('esconde-btn-top');
        }
    });
});

function fazerContato() {
    var nome = $('#formNome').val();
    var email = $('#formEmail').val();
    var assunto = $('#formAssunto').val();
    var mensagem = $('#formMensagem').val();
    //fazer a requisição...
    var retorno = 'sucesso';
    if (retorno == 'sucesso') {
        $('#toast-sucesso').addClass('toast-ativo');
        setTimeout(() => {
            $('#toast-sucesso').removeClass('toast-ativo');
        }, 3000);
    } else {
        $('#toast-erro').addClass('toast-ativo');
        setTimeout(() => {
            $('#toast-erro').removeClass('toast-ativo');
        }, 3000);
    }

}