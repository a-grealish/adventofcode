const path = require('path');
const assert = require('assert');
const utils = require('../../common/utils');
const solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it.skip('should match the expected value for example 1', function () {
			const test_input = utils.split_string_by_newline(`initial state: #..#.#..##......###...###

...## => #
..#.. => #
.#... => #
.#.#. => #
.#.## => #
.##.. => #
.#### => #
#.#.# => #
#.### => #
##.#. => #
##.## => #
###.. => #
###.# => #
####. => #`);
			assert.equal(solve(test_input).part1, 325);
		})
	});
});
