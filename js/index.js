$(document).ready(function () {

    // $('#linkDr').click(function() {
    //     $('.esconde-dr').removeClass('animation-img');  
    //     setTimeout(() => {
    //         $('.esconde-dr').addClass('animation-img');    
    //     }, 500);
        
    // });

    $('#fotoDr').on('inview', function(event, isInView) {
        if (isInView)
            $('.esconde-dr').addClass('animation-img');
        else
            $('.esconde-dr').removeClass('animation-img'); 
    });

    $('#imgTratamentos').on('inview', function(event, isInView) {
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