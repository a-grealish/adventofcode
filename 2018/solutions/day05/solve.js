var utils = require('../../common/utils');

function reactPolymer(polymer) {
	let reacted = true;
	while (reacted) {
		reacted = false;
		let last = polymer[0];
		// console.log(polymer.join());

		for (const [i, unit] of polymer.entries()) {
			if ((last.toLowerCase() == unit.toLowerCase()) && (last != unit)) {
				// The units will react
				reacted = true;
				polymer.splice(i-1, 2);
				break;
			}
			last = unit;
		}
		// console.log(polymer.length);
	}
	return polymer;
}

function removeAnyCase(c) {
	c = c.toLowerCase();
	return function (element) {
		return element.toLowerCase() != c
	}
}

function solve(input) {
	let polymer = input[0].split('');

	let uniqueUnits = new Set(input[0].toLowerCase());

	let minPolymerLength = Infinity;
	for (const unit of uniqueUnits) {
		// Filter out units and react the polyer
		let filteredPolymer = polymer.filter(removeAnyCase(unit));
		let collapsedPolymer = reactPolymer(filteredPolymer);

		// Check if this is the new shortest polymer
		if (collapsedPolymer.length < minPolymerLength) {
			minPolymerLength = collapsedPolymer.length;
		}
	}


	return {
		'part1': reactPolymer(polymer).length,
		'part2': minPolymerLength
	}
}

module.exports = {
	'solve': solve
};