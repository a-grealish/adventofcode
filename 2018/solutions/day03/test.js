const path = require('path');
const assert = require('assert');
const utils = require('../../common/utils');
const solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			const test_input = utils.split_string_by_newline("#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2");
			assert.equal(solve(test_input).part1, 4);
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function () {
			const test_input = utils.split_string_by_newline("#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2");
			assert.equal(solve(test_input).part2, 3);
		}),
		it('should return the correct value for example 2', function () {
			const test_input = utils.split_string_by_newline("#1 @ 3,1: 4x4\n#2 @ 5,5: 2x2\n#3 @ 1,3: 4x4");
			assert.equal(solve(test_input).part2, 2);
		})
	});
});
