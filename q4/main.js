var multiply = function(a, b) {
	var arow, acol, brow, bcol, p, q, r;
	arow = a.length;
	acol = a[0].length;
	brow = b.length;
	bcol = b[0].length;
	var c = [];
	for (p = 0; p < arow; p++) {
		c.push(new Array(bcol));
		for (q = 0; q < bcol; q++) {
			c[p][q] = 0;
		}
	}
	if (acol !== brow) {
		return null;
	}
	for (p = 0; p < arow; p++) {
		for (q = 0; q < bcol; q++) {
			for (r = 0; r < acol; r++) {
				c[p][q] = c[p][q] + (a[p][r] * b[r][q]);
			}
		}
	}
	return c;
};
var a = [
	[8, 3],
	[2, 4],
	[3, 6]
];
var b = [
	[1, 2, 3],
	[4, 6, 8]
];
console.log(multiply(a, b));


//I am trying another method for pascal triangle. Took reference from internet for this one.
var pascal = function(rows) {
	var pascalTriangle = [];

	for (var i = 0; i < rows; i++) {
		pascalTriangle[i] = new Array(i + 1);

		for (var j = 0; j < i + 1; j++) {
			if (j === 0 || j === i) {
				pascalTriangle[i][j] = 1;
			} else {
				pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
			}
		}
	}

	return pascalTriangle;
};
console.table(pascal(5));