var utils = require('../../common/utils');

function solve(input) {
	var sum = 0;
	var seen = new Set([sum]);
	var list_sum;
	var first_dupe;
	var max_runs = 100000;

	var freq_changes = utils.parseInts(input)

	while (first_dupe === undefined && max_runs-- > 0) {
		for (var change of freq_changes) {
			sum += change

			if (seen.has(sum)) {
				first_dupe = first_dupe === undefined ? sum : first_dupe;
			} else {
				seen.add(sum);
			}
		}
		list_sum = list_sum === undefined ? sum : list_sum;
	}

	return {
		'part1': list_sum,
		'part2': first_dupe
	}
}

module.exports = {
	'solve': solve
};