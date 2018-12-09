const path = require('path');
const assert = require('assert');
const utils = require('../../common/utils');
const solve = require('./solve').solve;

const test_input = utils.split_string_by_newline(`[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`);

describe(__dirname.split(path.sep).pop(), function () {
	describe('Part 1 - Sample Data Tests', function () {
		it('should match the expected value for example 1', function () {
			assert.equal(solve(test_input).part1, 240);
		}),
		it('should match the expected value for example 1 - non-chronological', function () {
			assert.equal(solve(test_input.reverse()).part1, 240);
		})
	});

	describe('Part 2 - Sample Data Tests', function () {
		it('should return the correct value for example 1', function () {
			assert.equal(solve(test_input).part2, 4455);
		}),
		it('should return the correct value for example 1', function () {
			assert.equal(solve(test_input.reverse()).part2, 4455);
		})
	});
});
