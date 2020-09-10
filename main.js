const config  = require('./config'),
      restify = require('restify'),
      mysql      = require('mysql')
var connection = config.db.get;

const server = restify.createServer({
	            name    : config.name,
	            version : config.version,
	            url : config.hostname,
		    port : config.port
});

server.listen(config.port, function () {
          console.log('%s listening at port %s', server.name, server.url);
});


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/list', function (req, res) {
   connection.query('select * from people', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

server.post('/create', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO people SET ?', postData, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

server.del('/delete/:id', function (req, res) {
   connection.query('DELETE FROM `people` WHERE `id`=?', [req.params.id], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
});
