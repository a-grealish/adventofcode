const utils = require('../../common/utils');

function solve(input) {
	let twos = 0; 
	let threes = 0;

	let part2;

	input = utils.trimList(input);
	

	for (const boxid of input) {

		let counts = {}
		for (const char of boxid) {
			counts[char] = char in counts ? counts[char] + 1 : 1;
		}
		if (Object.values(counts).indexOf(2) >= 0) twos += 1;
		if (Object.values(counts).indexOf(3) >= 0) threes += 1;

		// ToDo: Refactor to reduce number of nested loops
		for (const boxid_compare of input) {
			let char_diff = 0;
			let char_same = "";
			for (const i in boxid) {
				if (boxid[i] != boxid_compare[i]) {
					char_diff += 1;
				} else {
					char_same = char_same + boxid[i];
				}
			}

			if (char_diff == 1) {
				part2 = char_same;
				break;
			}

		}
	}

	return {
		'part1': twos * threes,
		'part2': part2
	}
}

module.exports = {
	'solve': solve
};