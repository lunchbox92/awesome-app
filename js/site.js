$(document)
    .ready(function() {

        if ($('#table_id')
            .length > 0) {
            $('#table_id')
                .DataTable(

                );
        }

        if ($('.chosen-select').length > 0) {




            $(".chosen-select").chosen({
                disable_search_threshold: 10
            });
        }
    });
