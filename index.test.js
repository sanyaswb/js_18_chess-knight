const knight = require("./index");

test('Функция должна вернуть булиновое значение', () => {
	const type = typeof knight(6, 7, 7, 5);

	expect(type).toBe('boolean');
});

test('Тест. x1: 6, y1: 7, x2: 7, y2: 5', () => {
	const res = knight(6, 7, 7, 5);

	expect(res).toBe(true);
});

test('Тест. x1: 7, y1: 3, x2: 8, y2: 1', () => {
	const res = knight(7, 3, 8, 1);

	expect(res).toBe(true);
});

test('Тест. x1: 8, y1: 8, x2: 5, y2: 4', () => {
	const res = knight(8, 8, 5, 4);

	expect(res).toBe(false);
});

test('Тест. x1: 2, y1: 1, x2: 4, y2: 2', () => {
	const res = knight(2, 1, 4, 2);

	expect(res).toBe(true);
});

test('Тест. x1: 5, y1: 6, x2: 8, y2: 8', () => {
	const res = knight(5, 6, 8, 8);

	expect(res).toBe(false);
});

test('Тест. x1: 6, y1: 2, x2: 3, y2: 6', () => {
	const res = knight(6, 2, 3, 6);

	expect(res).toBe(false);
});

test('Тест. x1: 3, y1: 4, x2: 2, y2: 2', () => {
	const res = knight(3, 4, 2, 2);

	expect(res).toBe(true);
});