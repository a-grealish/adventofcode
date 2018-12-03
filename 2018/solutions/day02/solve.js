const utils = require('../../common/utils');

function solve(input) {
	let twos = 0; 
	let threes = 0;
	
	for (let boxid of input) {
		boxid = boxid.trim();
		let counts = {}
		for (const char of boxid) {
			counts[char] = char in counts ? counts[char] + 1 : 1;
		}
		if (Object.values(counts).indexOf(2) >= 0) twos += 1;
		if (Object.values(counts).indexOf(3) >= 0) threes += 1;
	}

	return {
		'part1': twos * threes,
		'part2': 'part2_result_placeholder'
	}
}

module.exports = {
	'solve': solve
};