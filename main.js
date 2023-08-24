const tar = [];

$('form').on('submit', function (e) {
    e.preventDefault();
    const nomeDaNovaTarefa = $('#nome-tarefa-nova').val();

    if (tar.includes($('#nome-tarefa-nova').val())) {
        alert(`A tarefa "${nomeDaNovaTarefa}" já está listada.`);
    } else {        
        const id = nomeDaNovaTarefa.replaceAll(" ", "_");
        const novaTarefa = $('<li></li>');

        tar.push($('#nome-tarefa-nova').val());

        $(`<div id="${id}">${nomeDaNovaTarefa}</div>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        $('#nome-imagem-nova').val('');
    }
})

$('ul').on('click', function (e) {
    const opcao = $(e.target).text();
    const opc = opcao.replaceAll(" ", "_");

    $(`#${opc}`).css("text-decoration", "line-through");
})