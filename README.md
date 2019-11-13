## AJAX & JSON & jQuery Encapsulation
A simple AJAX with JSON and encapsulate it like jQuery.<br>
Here are three editions of main JS files.<br>
#### The first:
*main.js*<br><br>
The simple one using AJAX with JSON.
#### The second:
*jQuery-AJAX.js*<br><br>
Make it to a jQuery function which can be used like this:<br>
`jQuery.ajax({url, method, body, success, fail})`
#### The third:
*jQuery-AJAX-Promise.js*<br><br>
Use an upgraded version of Promise. Like this:<br>
`jQuery.ajax({url, method, body}).then(success, fail)`
### Using CORS Cross-Domain
`response.setHeader('Access-Control-Allow-Origin', 'http://sgs.com:8000')`<br><br>
Please configure your own JS file and hosts file.
