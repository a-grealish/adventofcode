var utils = require('../../common/utils');

function manhattanDistance(pointA, pointB) {
	return Math.abs(pointB[0] - pointA[0]) + Math.abs(pointB[1] - pointA[1]);
}

function solve(input) {

	// Parse coodinates to an array in int tuples
	let coordiantes = input.map( x => {
		return x.split(", ").map( y => { return parseInt(y)});
	});

	let areas = new Array(coordiantes.length);

	let xValues = coordiantes.map(element => {return element[0]});
	let yValues = coordiantes.map(element => {return element[1]});

	let xMin = Math.min.apply(null, xValues);
	let xMax = Math.max.apply(null, xValues);
	let yMin = Math.min.apply(null, yValues);
	let yMax = Math.max.apply(null, yValues);

	for (let x=xMin; x<=xMax; x++) {
		for (let y=yMin; y<=yMax; y++) {
			let minDistance = Infinity;
			let minDistanceId;
			for (let id in coordiantes) {
				let distance = manhattanDistance(coordiantes[id], [x,y]);
				if (distance == minDistance) {
					minDistanceId = null;
				} else if (distance < minDistance) {
					minDistanceId = id;
					minDistance = distance;
				}
			}

			// Skip points with equal distances to two points
			if (minDistanceId === null) continue;

			// If it's on the edge, then size is infinite
			if (x==xMin || x==xMax || y==yMin || y==yMax)  {
				areas[minDistanceId] = Infinity;
			} else {
				areas[minDistanceId] = (areas[minDistanceId] || 0) + 1;
			}
		}
	}

	// Part 1 answer is the largest, non-infinite area
	let part1 = Math.max.apply(null, areas.filter(x => {return x !== Infinity}));

	let part2;

	return {
		'part1': part1,
		'part2': part2
	}
}

module.exports = {
	'solve': solve
};