const path = require('path');
const assert = require('assert');
const utils = require('../../common/utils');
const solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			const test_input = utils.split_string_by_newline("1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9");
			assert.equal(solve(test_input).part1, 17);
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function () {
			const test_input = utils.split_string_by_newline("1\n1\n");
			assert.equal(solve(test_input).part2, 'part2_result_placeholder');
		})
	});
});
