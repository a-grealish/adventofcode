const path = require('path');
const assert = require('assert');
const utils = require('../../common/utils');
const solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			const test_input = utils.split_string_by_newline("dabAcCaCBAcCcaDA");
			assert.equal(solve(test_input).part1, 10);
		}),
		it('should match the expected value for example 2', function () {
			const test_input = utils.split_string_by_newline("aA");
			assert.equal(solve(test_input).part1, 0);
		}),
		it('should match the expected value for example 3', function () {
			const test_input = utils.split_string_by_newline("abBA");
			assert.equal(solve(test_input).part1, 0);
		}),
		it('should match the expected value for example 4', function () {
			const test_input = utils.split_string_by_newline("abAB");
			assert.equal(solve(test_input).part1, 4);
		}),
		it('should match the expected value for example 5', function () {
			const test_input = utils.split_string_by_newline("aabAAB");
			assert.equal(solve(test_input).part1, 6);
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function () {
			const test_input = utils.split_string_by_newline("dabAcCaCBAcCcaDA");
			assert.equal(solve(test_input).part2, 4);
		})
	});
});
