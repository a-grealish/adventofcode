var utils = require('../../common/utils');

function solve(input) {
	let clothClaims = {};
	let part1, part2;
	let claimsOverlapped = {};

	for (claim of input) {

		let [claimId, _, startPos, size] = claim.split(' ');
		claimId = parseInt(claimId.replace('#', ''));
		let [xStart, yStart] = utils.parseInts(startPos.split(/[\,\:]/, 2));
		let [xSize, ySize] = utils.parseInts(size.split('x'));
		
		for (let x=xStart; x<xStart+xSize; x++) {
			for (let y=yStart; y<yStart+ySize; y++) {
				// console.log(claimId, xStart, xSize, xStart+xSize, yStart, ySize, yStart+ySize, x, y);
				let index = [x,y];
				let claims = index in clothClaims ? clothClaims[index] : [];
				claims.push(claimId);
				clothClaims[index] = claims;	
			}
		}

		claimsOverlapped[claimId] = false;
	}

	for (claims of Object.values(clothClaims)) {
		if (claims.length > 1) {
			for (claim of claims) {
				claimsOverlapped[claim] = true;
			}
		}
	}

	for (claim in claimsOverlapped) {
		if (claimsOverlapped[claim] == false) {
			console.log("Non overlapping cloth found ad "+claim);
			part2 = claim;
		}
	}

	function listLongerThanOne(x) {
		return x.length > 1;
	}

	part1 = Object.values(clothClaims).filter(listLongerThanOne).length;

	return {
		'part1': part1,
		'part2': part2
	}
}

module.exports = {
	'solve': solve
};