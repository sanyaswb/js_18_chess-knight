function knight(x1, y1, x2, y2) {
	return Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2  || Math.abs(y1 - y2) === 1 && Math.abs(x1 - x2) === 2;
}

module.exports = knight;
