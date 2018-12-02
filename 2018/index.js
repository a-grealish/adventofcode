var input = require('./common/input');

var day = parseInt(process.argv.slice(2));

if (day <= 25 && day >= 1) {
	// Pad the day with leading 0
	var base_path = "./solutions/day"+("0"+day).slice(-2)+"/";
} else {
	throw "Invalid Day, must be between 1 and 25";
}

try {
	var solution = require(base_path+"solve");
} catch {
	throw "Could not find solution file for day "+day;
}

var input = input.load_input(base_path+"input.txt");

var res = solution.solve(input);

console.log(res); 