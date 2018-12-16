const path = require('path');
const assert = require('assert');
const utils = require('../../common/utils');
const solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it.skip('should match the expected value for example 1', function () {
			const test_input = ['42']
			assert.equal(solve(test_input).part1, [21, 61].toString());
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		// ToDo: Make these tests faster
		it.skip('should return the correct value for example 1', function () {
			assert.equal(solve(['18']).part2, [90,269,16].toString());
		}),
		it.skip('should return the correct value for example 1', function () {
			assert.equal(solve(['42']).part2, [232,251,12].toString());
		})
	});
});
