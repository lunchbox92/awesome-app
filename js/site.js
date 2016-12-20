$(document)
    .ready(function() {

        if ($('#table_id').length > 0) {
            $('#table_id')
                .DataTable();
        }

        var $selectList = $('.chosen-select');

        if ($selectList.length > 0) {
            var parsedCSV = Papa.parse('/data/hartmanpartnumbers.csv', {
                download: true,
                complete: function(results) {
                    var dataArray = results.data;
                    $.each(dataArray, function(key, value) {
                        $selectList
                            .append($("<option></option>")
                                .attr("value", key)
                                .text(value));
                    });
                    $selectList.chosen({
                        disable_search_threshold: 10
                    });
                }
            })
        }
    });
