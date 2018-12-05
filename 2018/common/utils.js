
function split_string_by_newline(string) {
	return string.split(/\r?\n/);
}

var isNotNaN = function(x) {
	return !isNaN(x);
}

function parseInts(stings) {
	return stings.map(function(x) {
		return parseInt(x);
	}).filter(isNotNaN);
}

function trimList(strings) {
	return strings.map(function(x){
		return x.trim()
	})
}

module.exports = {
	'split_string_by_newline': split_string_by_newline,
	'isNotNaN': isNotNaN,
	'parseInts': parseInts,
	'trimList': trimList
}