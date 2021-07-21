import { Init } from '../src/index';

describe('Init class', () => {
	let init: Init;

	beforeEach(() => {
		init = new Init();
	});

	it('should return true', () => {
		expect(init.init()).toBeTruthy();
	});
});