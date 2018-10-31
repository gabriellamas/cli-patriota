
$('.input-titulo').focus();


let opcaoDetalhe = `
    <li style="position:relative;">
        <button type="button" class="delete-line" onclick="deletarLinha(event)">x</button>
        <div class="opcao">
            <input type="text" placeholder="Digite um detalhe" class="input-personalizado input-texto">
        </div>
    </li>
`;

$('.bt-adicionar-detalhe').on('click', function () {
    $('.opcoes-detalhe').append(opcaoDetalhe)

});

let opcaoRequisito = `
    <li style="position:relative;">
        <button type="button" class="delete-line" onclick="deletarLinha(event)">x</button>
        <div class="opcao">
            <input type="text" placeholder="Digite um requisito" class="input-personalizado input-texto">
        </div>
    </li>
`;

$('.bt-adicionar-requisito').on('click', function () {
    $('.opcoes-requisito').append(opcaoRequisito)

});


function deletarLinha(event){
    let btClicado = event.target;

    $(btClicado).parents('li').remove()

    console.log(btClicado);
}

$('#bg1').on('click', function(){
    if( $('#bg1').is(':checked') ){
        $('.titulo-area').css({
            'background':'url("https://static.vecteezy.com/system/resources/previews/000/101/237/non_2x/free-abstract-background-11-vector.jpg") no-repeat center center',
            'background-size' : 'cover'
        });
    }
});

$('#bg2').on('click', function(){
    if( $('#bg2').is(':checked') ){
        $('.titulo-area').css({
            'background':'url("https://image.freepik.com/free-psd/abstract-background-design_1297-84.jpg") no-repeat center center',
            'background-size' : 'cover'
        });
    }
});

$('#bg3').on('click', function(){
    if( $('#bg3').is(':checked') ){
        $('.titulo-area').css({
            'background':'url("https://i.ytimg.com/vi/5-LyRjHlRgQ/maxresdefault.jpg") no-repeat center center',
            'background-size' : 'cover'
        });
    }
});
