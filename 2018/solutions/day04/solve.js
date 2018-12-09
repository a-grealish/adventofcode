var utils = require('../../common/utils');

function solve(input) {

	let guardSleepTime = {};

	// Parse and sort the logs
	let chronologicalLogs = input.map(function(x) { 
		let [_, time, message] = x.split(/[\[\]]/); 
		return [new Date(time), message.trim()];
	}).sort(function (a,b) {
		// Sort by the log time
		return a[0] - b[0];
	});

	// Convert the log to a new ds
	let sleepStart;
	let guardId;
	for (log of chronologicalLogs) {
		let [time, message] = log;

		if (message.match(/\d+/)) {
			guardId = message.match(/\d+/);
			sleepStart = null;
		} else if (message == 'falls asleep') {
			sleepStart = time; 
		} else if (message == 'wakes up') {
			let sleepDuration = (time - sleepStart) / (1000 * 60);

			if (guardId in guardSleepTime) {
				guardSleepTime[guardId].duration += sleepDuration;
			} else {
				guardSleepTime[guardId] = {
					'duration': sleepDuration,
					'byMinute': new Array(60)
				}
			}
			for (let minute = sleepStart.getMinutes(); minute < time.getMinutes(); minute++) {
				guardSleepTime[guardId].byMinute[minute] = guardSleepTime[guardId].byMinute[minute] + 1 || 1;
			}

		} else {
			throw "Unrecognsied log message";
		}
	}

	let sleepiestGuard = null;
	let max = -1;
	for (id in guardSleepTime) {
		if (guardSleepTime[id].duration > max) {
			sleepiestGuard = id;
			max = guardSleepTime[id].duration;
		}
	}

	
	let sleepiestMinute;
	max = -1;
	for (let i in guardSleepTime[sleepiestGuard].byMinute) {
		if (guardSleepTime[sleepiestGuard].byMinute[i] > max) {
			max = guardSleepTime[sleepiestGuard].byMinute[i];
			sleepiestMinute = i;
		}
	}

	let sleepiestGuardMinute;
	let sleepiestGuardMinuteGuard;
	max = -1;
	for (let id in guardSleepTime) {
		for (let minute in guardSleepTime[id].byMinute) {
			if (guardSleepTime[id].byMinute[minute] > max) {
				max = guardSleepTime[id].byMinute[minute];
				sleepiestGuardMinute = minute;
				sleepiestGuardMinuteGuard = id;
			}
		}
	}

	return {
		'part1': sleepiestGuard * sleepiestMinute,
		'part2': sleepiestGuardMinuteGuard * sleepiestGuardMinute
	}
}

module.exports = {
	'solve': solve
};