var utils = require('../../common/utils');

function parseState(stateInput) {
	stateInput = stateInput.replace('initial state: ', '');

	return stateInput.split('').map(x => {return x=='#'});
}

function parseTransforms(transformsInput) {
	let map = {};
	for (transform of transformsInput) {
		if (transform == '') continue;

		let [key, value] = transform.split(' => ');
		key = key.split('').map(x => {return x=='#'});
		map[key] = (value == '#');
	}
	return map;
}

function applyTransformations(state, transforms, itterations) {

	let offset = 0;

	for (let i=0; i<itterations; i++) {

		// if (i%10 == 0) console.log(state.map(elm => elm ? '#' : '.').join(''));

		// Extend the start and end of the list if needed
		if (state[0] || state[1]) {
			state.unshift(false, false);
			offset -= 2;
		}
		if (state[state.length - 1] || state[state.length - 2]) {
			state.push(false, false);
		}

		// Go through each element of the list and apply the transformation
		let newState = state.slice(0);
		for (let j=0; j<state.length; j++) {
			let stateWindow = [state[j-2]||false, state[j-1]||false, state[j]||false, state[j+1]||false, state[j+2]||false];
			
			// if (i==0) console.log(stateWindow.toString());

			newState[j] = transforms[stateWindow] || false;
		}

		state = newState;
	}

	let countPlants = 0;
	for (let i=0; i<state.length; i++) {
		if (state[i]) {
			countPlants += i + offset;
		}
	}

	return countPlants;
}

function solve(input) {

	const state = parseState(input.shift());
	// console.log(state);

	let transforms = parseTransforms(input);
	// console.log(transforms);
	
	console.log("Starting part 1");

	let part1 = applyTransformations(state.slice(0), transforms, 20);

	console.log("Starting part 2");

	// For part 2, run the trasnform for two itteration counts,
	// calculate the linear relationship and extrapolate to  5 billiom
	// Todo: a better approach is to apply transformations only until the
	// infinite shifting is first detected then extraolate from there.
	let res5000 = applyTransformations(state.slice(0), transforms, 5000);
	let res6000 = applyTransformations(state.slice(0), transforms, 6000);
	console.log([5000, res5000], [6000, res6000]);

	let a = (res6000 - res5000) / (6000 - 5000);
	let b = res5000 - (a*5000);

	let part2 = (a * 50000000000) + b;

	return {
		'part1': part1,
		'part2': part2
	}
}

module.exports = {
	'solve': solve
};