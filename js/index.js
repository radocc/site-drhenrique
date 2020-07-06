$(document).ready(function () {

    // $('#linkDr').click(function() {
    //     $('.esconde-dr').removeClass('animation-img');  
    //     setTimeout(() => {
    //         $('.esconde-dr').addClass('animation-img');    
    //     }, 500);

    // });

    $('#inicio').on('inview', function (event, isInView) {
        if (isInView) {
            setTimeout(() => {
                $('.img-logo-left').addClass('animation-img-logo-left');
                $('.img-logo-right').addClass('animation-img-logo-right');
            }, 500);
        }
        else {
            $('.img-logo-left').removeClass('animation-img-logo-left');
            $('.img-logo-right').removeClass('animation-img-logo-right');
        }
    });

    $('#clinica').on('inview', function (event, isInView) {
        if (isInView) {
            setTimeout(() => {
                $('.titulo-apresentacao').addClass('animation-titulo-apresentacao');
                $('.desc-apresentacao').addClass('animation-desc-apresentacao');
            }, 500);
        }
        else {
            $('.titulo-apresentacao').removeClass('animation-titulo-apresentacao');
            $('.desc-apresentacao').removeClass('animation-desc-apresentacao');
        }
    })

    $('#apresentacaoDr').on('inview', function (event, isInView) {
        if (isInView) {
            setTimeout(() => {
                $('.titulo-apresentacao-dr').addClass('animation-titulo-apresentacao-dr');
                $('.texto-apresentacao-dr').addClass('animation-texto-apresentacao-dr');
            }, 500);
        }
        else {
            $('.titulo-apresentacao-dr').removeClass('animation-titulo-apresentacao-dr');
            $('.texto-apresentacao-dr').removeClass('animation-texto-apresentacao-dr');
        }
    })

    $('#fotoDr').on('inview', function (event, isInView) {
        if (isInView)
            $('.esconde-dr').addClass('animation-img');
        else
            $('.esconde-dr').removeClass('animation-img');
    });

    $('#imgTratamentos').on('inview', function (event, isInView) {
        if (isInView)
            setTimeout(() => {
                $('.img-tratamentos').addClass('anima-img-tratamentos');
            }, 300);

        else
            $('.img-tratamentos').removeClass('anima-img-tratamentos');
    });


    var scrollBottom = $(window).scrollTop() + $(window).height();

    // if (scrollBottom > 4004) {
    //     $('.esconde-dr').addClass('animation-img');
    // }
    // if (scrollBottom > 4874)
    //     $('.img-tratamentos').addClass('anima-img-tratamentos');
    $(window).scroll(function () {

        var scrollBottom = $(window).scrollTop() + $(window).height();
        if ($(this).scrollTop() > 160)
            $('#btn-top').removeClass('esconde-btn-top');

        else
            $('#btn-top').addClass('esconde-btn-top');

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