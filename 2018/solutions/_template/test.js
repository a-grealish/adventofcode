var path = require('path');
var assert = require('assert');
var utils = require('../../common/utils');
var solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			var test_input = utils.split_string_by_newline("1\n1\n");
			assert.equal(solve(test_input).part1, 'part1_result_placeholder');
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function () {
			var test_input = utils.split_string_by_newline("1\n1\n");
			assert.equal(solve(test_input).part2, 'part2_result_placeholder');
		})
	});
});
