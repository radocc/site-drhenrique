$(document).ready(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom > 4004) {
        $('.esconde-dr').addClass('animation-img');
    }
    if (scrollBottom > 4874)
        $('.img-tratamentos').addClass('anima-img-tratamentos');
    $(window).scroll(function () {

        var scrollBottom = $(window).scrollTop() + $(window).height();
        if ($(this).scrollTop() > 160)
            $('#btn-top').removeClass('esconde-btn-top');

        else
            $('#btn-top').addClass('esconde-btn-top');

        if (scrollBottom > 4004)
            $('.esconde-dr').addClass('animation-img');
        else
            $('.esconde-dr').removeClass('animation-img');

        if (scrollBottom > 4874)
            $('.img-tratamentos').addClass('anima-img-tratamentos');
        else
            $('.img-tratamentos').removeClass('anima-img-tratamentos');
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