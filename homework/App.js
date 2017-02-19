
var $ = require('jquery');
var ajax = require('./ajax');
var createTable = require('./createTable');

$('#btn').on('click',function(e){
    ajax('url',function(data){
        var table = createTable(data.fruit);
        $(document.body).append(table);
    })
})

