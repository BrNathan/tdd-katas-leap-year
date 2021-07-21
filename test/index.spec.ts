import { LeapYearDetector } from '../src/index';

describe('LeapYearDetector - ', () => {
	let leapYearDetector: LeapYearDetector;

	beforeEach(() => {
		leapYearDetector = new LeapYearDetector();
	});

	it('exist', () => {
		expect(leapYearDetector).toBeDefined();
	});
});