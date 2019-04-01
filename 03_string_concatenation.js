// ES5

var domain = "localhost";
var port = 3000;
var id = 5;
var url = 'http://' + domain + ':' + port + '/api/users/' + id;

// Multiline strings
// Version 1
var paragraph = 'First paragraph\n'
    + 'Second paragraph.';

// Version 2
var paragraph = 'First paragraph\n\
        Second paragraph.';

// var HTML5_SKELETON =
//     '<!doctype html>\n' +
//     '<html>\n' +
//     '<head>\n' +
//     '    <meta charset="UTF-8">\n' +
//     '    <title></title>\n' +
//     '</head>\n' +
//     '<body>\n' +
//     '</body>\n' +
//     '</html>\n';

// var HTML5_SKELETON = '\
//     <!doctype html>\n\
//     <html>\n\
//     <head>\n\
//         <meta charset="UTF-8">\n\
//         <title></title>\n\
//     </head>\n\
//     <body>\n\
//     </body>\n\
//     </html>';

// ES6

// Template literals
var domain = "localhost";
var port = 3000;
var id = 5;
var url = `http://${domain}:${port}/api/users/${id}`;

// Multiline strings
// Version 1
var paragraph = `First paragraph
    Second paragraph.`;


// const HTML5_SKELETON = `
//     <!doctype html>
//     <html>
//     <head>
//         <meta charset="UTF-8">
//         <title></title>
//     </head>
//     <body>
//     </body>
//     </html>`;