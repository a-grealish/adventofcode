
function split_string_by_newline(string) {
	return string.split(/\r?\n/);
}

module.exports = {
	'split_string_by_newline': split_string_by_newline
}