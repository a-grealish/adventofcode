var utils = require('../../common/utils');

const size = 300;

function generateFuelCell(gridSerial) {
	let fuelCell = [];
	for (let y=0; y<size; y++) {
		fuelCell[y] = [];
		for (let x=0; x<size; x++) {
			let rackId = x+10;
			let powerLevel = (rackId*y + gridSerial)*rackId;
			powerLevel = parseInt(powerLevel.toString().slice(-3, -1)[0]) - 5;
			fuelCell[y][x] = powerLevel;
		} 
	}

	return fuelCell;
}

function searchHighPower(fuelCell, searchSize) {

	let maxPower = - Infinity;
	let maxPowerLocation;

	for (let y=0; y<size-searchSize-1; y++) {
		for (let x=0; x<size-searchSize-1; x++) {
			let sumPower = 0;
			for (let i=0; i<searchSize; i++) {
				for (let j=0; j<searchSize; j++) {
					sumPower += fuelCell[y+i][x+j];
				}
			}

			if (sumPower > maxPower) {
				maxPower = sumPower;
				maxPowerLocation = [x,y];
			}
		}
	}

	return [maxPowerLocation, maxPower];
}

function render(fuelCell) {
	for (row of fuelCell) {
		console.log(row.join(','));
	}
}

function solve(input) {
	let gridSerial = Number(input[0]);

	let fuelCell = generateFuelCell(gridSerial);
	let [maxPowerLocation, maxPower] = searchHighPower(fuelCell, 3);

	let largestPower = - Infinity;
	let part2;
	for (let i=0; i<size; i++) {
		let [maxAnySizePowerLocation, maxAnySizePower] = searchHighPower(fuelCell, i);
		if (maxAnySizePower > largestPower) {
			largestPower = maxAnySizePower;
			part2 = [...maxAnySizePowerLocation, i];
		}
	}

	return {
		'part1': maxPowerLocation.toString(),
		'part2': part2.toString()
	}
}

module.exports = {
	'solve': solve
};