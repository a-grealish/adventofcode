var utils = require('../../common/utils');

function parseInput(input) {
	return input.map(line => {
		let [x, y, vx, vy] = line.match(/[\d-]+/g).map(Number);
		return {'position': {'x': x, 'y': y}, 'velocity': {'x': vx, 'y': vy}}
	});
}

function stepFrame(points) {
	points.map(point => {
		point.position.x += point.velocity.x;
		point.position.y += point.velocity.y;
		return point
	})
}

function getSize(points) {
	let output = [];
	let xMin = yMin = Infinity;
	let xMax = yMax = - Infinity;

	points.map(point => {
		xMin = point.position.x < xMin ? point.position.x : xMin;
		yMin = point.position.y < yMin ? point.position.y : yMin;
		xMax = point.position.x > xMax ? point.position.x : xMax;
		yMax = point.position.y > yMax ? point.position.y : yMax;
	});

	// console.log([xMin, yMin], [xMax, yMax], [xMax-xMin], [yMax-yMin]);

	return [xMax-xMin, yMax-yMin];
}

function render(points) {
	let output = [];
	let xMin = yMin = Infinity;
	let xMax = yMax = - Infinity;

	points.map(point => {
		xMin = point.position.x < xMin ? point.position.x : xMin;
		yMin = point.position.y < yMin ? point.position.y : yMin;
		xMax = point.position.x > xMax ? point.position.x : xMax;
		yMax = point.position.y > yMax ? point.position.y : yMax;
	});

	// Initalise the output screen
	for (let x=0; x<xMax-xMin+1; x++) {
		output[x] = [];
		for (let y=0; y<yMax-yMin+1; y++) {
			output[x][y] = '.';
		}
	}

	// Add the points to the screen
	points.map(point => {
		output[point.position.x - xMin][point.position.y - yMin] = '#';
	})

	// Display
	for (line of output) {
		console.log(line.join(''));
	}

}

function solve(input) {
	let points = parseInput(input);
	let size =  previousSize = [Infinity, Infinity];
	let previousPoints = points;
	
	for (let i=0; i<100000; i++) {
		previousPoints = points;
		previousSize = size;

		stepFrame(points);
		size = getSize(points);

		if (i==10026) {
			render(points);
			break;
		}

		// Find minimum size of the output, this must be close to the text output
		// if (size[0]*size[1] > previousSize[0]*previousSize[1]) {
		// 	console.log(i);
		// 	// console.log(size);
		// 	// render(previousPoints)
		// 	// render(points);
		// 	// stepFrame(points);
		// 	// render(points);
		// 	break;
		// }

	}
	
	return {
		'part1': 'part1_result_placeholder',
		'part2': 'part2_result_placeholder'
	}
}

module.exports = {
	'solve': solve,
	'parseInput': parseInput,
	'stepFrame': stepFrame,
	'render': render
};