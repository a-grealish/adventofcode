var path = require('path');
var assert = require('assert');
var utils = require('../../common/utils');
var solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			var test_input = utils.split_string_by_newline('+1\n-2\n+3\n+1\n');
			assert.equal(solve(test_input).part1, 3);
		}),
		it('should match the expected value for example 2', function () {
			var test_input = utils.split_string_by_newline('+1\n+1\n+1\n');
			assert.equal(solve(test_input).part1, 3);
		}),
		it('should match the expected value for example 3', function () {
			var test_input = utils.split_string_by_newline('+1\n+1\n-2\n');
			assert.equal(solve(test_input).part1, 0);
		}),
		it('should match the expected value for example 4', function () {
			var test_input = utils.split_string_by_newline('-1\n-2\n-3\n');
			assert.equal(solve(test_input).part1, -6);
		});
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function() {
			var test_input = '+1, -2, +3, +1'.split(',');
			assert.equal(solve(test_input).part2, 2);
		}),
		it('should return the correct value for example 2', function () {
			var test_input = '+1, -1'.split(',');
			assert.equal(solve(test_input).part2, 0);
		}),
		it('should return the correct value for example 3', function () {
			var test_input = '+3, +3, +4, -2, -4'.split(',');
			assert.equal(solve(test_input).part2, 10);
		}),
		it('should return the correct value for example 4', function () {
			var test_input = '-6, +3, +8, +5, -6'.split(',');
			assert.equal(solve(test_input).part2, 5);
		}),
		it('should return the correct value for example 5', function () {
			var test_input = '+7, +7, -2, -7, -4'.split(',');
			assert.equal(solve(test_input).part2, 14);
		});
	});
});
