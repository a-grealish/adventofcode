var path = require('path');
var assert = require('assert');
var utils = require('../../common/utils');
var solve = require('./solve').solve;

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			const test_input = utils.split_string_by_newline(`abcdef
				bababc
				abbcde
				abcccd
				aabcdd
				abcdee
				ababab`);
			assert.equal(solve(test_input).part1, 12);
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function () {
			const test_input = utils.split_string_by_newline(`abcde
				fghij
				klmno
				pqrst
				fguij
				axcye
				wvxyz`);
			assert.equal(solve(test_input).part2, 'fgij');
		})
	});
});
