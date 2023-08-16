$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const tarefaTexto = $('#tarefa').val();
        const novaTarefa = $('<li></li>');

        novaTarefa.text(tarefaTexto);

        novaTarefa.on('click', function() {
            $(novaTarefa).toggleClass('tarefa-concluida');
        });
        
        $('.lista').append(novaTarefa);
        $('#tarefa').val('');
    });
});