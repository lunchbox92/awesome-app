$(document)
    .ready(function() {
        $('#table_id')
            .DataTable(

            );


        $(".chosen-select")
            .chosen({
                disable_search_threshold: 10
            });
    });
