$(document)
    .ready(function() {

        if ($('#table_id').length > 0) {
            $('#table_id')
                .DataTable();
        }

        if ($('.chosen-select').length > 0) {

            $.ajax({
                type: "GET",
                url: "data.csv",
                dataType: "text",
                success: function(data) {
                    processData(data);
                }
            });

            var fs = require('fs');
            var $ = jQuery = require('jQuery');
            require('../src/jquery.csv.js');

            var sample = '/data/hartmanpartnumbers.csv';
            $.csv.readFile(sample, 'UTF-8', function(err, csv) {
                $.csv.toArrays(csv, {}, function(err, data) {
                    for (var i = 0, len = data.length; i < len; i++) {
                        console.log(data[i]);
                    }
                });
            });


            $(".chosen-select").chosen({
                disable_search_threshold: 10
            });
        }
    });

function printTable(file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
        var csv = event.target.result;
        var data = $.csv.toArrays(csv);
        var html = '';
        for (var row in data) {
            html += '<tr>\r\n';
            for (var item in data[row]) {
                html += '<td>' + data[row][item] + '</td>\r\n';
            }
            html += '</tr>\r\n';
        }
        $('#contents').html(html);
    };
    reader.onerror = function() {
        alert('Unable to read ' + file.fileName);
    };
}
