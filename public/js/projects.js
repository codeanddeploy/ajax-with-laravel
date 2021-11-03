$(document).ready(function(){

    var table = '#projects-table';
    var modal = '#add-project-modal';
    var form = '#add-project-form';

    $(form).on('submit', function(event){
        event.preventDefault();

        var url = $(this).attr('data-action');

        $.ajax({
            url: url,
            method: 'POST',
            data: new FormData(this),
            dataType: 'JSON',
            contentType: false,
            cache: false,
            processData: false,
            success:function(response)
            {
                var row = '<tr>';
                    row += '<th scope="row">'+response.id+'</th>';
                    row += '<td>'+response.title+'</td>';
                    row += '<td>'+response.title+'</td>';
                row += '</tr>';

                $(table).find('tbody').prepend(row);


                $(form).trigger("reset");
                $(modal).modal('hide');
            },
            error: function(response) {
            }
        });
    });

});