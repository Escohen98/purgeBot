//Copyright (c) 2019, Eric Cohen.
//Write to log file
module.exports = (text, day) => {
	const fs = require("fs");
	const file = "./command_log.txt"
//var day = " ";
//function processInput ( text )
//{
  var d = new Date();
  var time = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] `;
  fs.open(file, 'a', 666, function( e, id ) {
	if(day!==d.getDay()) {
		var theDate = `[${d.getMonth()}/${d.getDay()}/${d.getYear()}]`;
		fs.write( id, theDate + "\r\n", null, 'utf8', function(err, result) {
			if(err) console.log("error", err);
		});
	day = d.getDay();
	}
    fs.write( id, time + text + "\r\n", null, 'utf8', function(err, result){
			if(err) console.log("error", err);
		fs.close(id, function(){
			console.log(time + text);
		});
    });
  });
 }
