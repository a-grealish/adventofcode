

function solve(input) {
	var sum = 0;
	for (var item of input) {
		sum += parseInt(item) || 0;
	}

	return {
		'part1': sum,
		'part2': 'part2_result_placeholder'
	}
}

module.exports = {
	'solve': solve
};