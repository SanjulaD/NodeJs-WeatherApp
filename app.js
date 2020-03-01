var http = require('http');

var url = 'use weather api';

var server = http.createServer(function ( request, response ) {

    // All logic will go here
    var request = require('request');
    request( url , function(err, res, body) {
        
        var data = JSON.parse(body);

        response.write("<html><body><div id='container'>");
        response.write("<h1>"+'City Name : '+ data['name'] + '<br>'+ "</h1>");
        response.write("<h2>"+'Temperature : '+ data.main['temp'] + '<br>'+ "</h2>");
        response.write("<h2>"+'Sunset Time : '+ new Date(data.sys['sunset']*1000) + '<br>'+ "</h2>");
        response.write("</div></body></html>");

        response.end();

    });

    


}).listen(8081);