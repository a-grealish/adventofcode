var fs = require('fs');
var utils = require('./utils');

// Loads the input path file into memory, converting to an array of strings by line
function load_input(path) {
	var data = fs.readFileSync(path).toString();
	return utils.split_string_by_newline(data).filter(x => x != '');
}


module.exports = {
	'load_input': load_input
};
