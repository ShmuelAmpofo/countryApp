
/*For the purposes of this exercise, you must create a

 separate module for reading and parsing the JSON file, named "json-file-reader".

This module should have a 


unction that takes in a filename 
and a callback function as a parameter.

 It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.
Hints:

Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)) to parse JSON data from files into a JavaScript object.
Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult.
	for loop.  for data. */

	var fs = require("fs");

		var  jasonReader  = function (file,interprate){

			fs.readFile(file, 'utf-8', function(err,data){
			
			if (err) throw err;


			data = JSON.parse(data);

			interprate(data)

		  });
		  }


	exports.jasonReader = jasonReader




	