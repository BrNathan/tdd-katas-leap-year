import { LeapYearDetector } from '../src/index';

describe('LeapYearDetector - ', () => {
	let detector: LeapYearDetector;

	beforeEach(() => {
		detector = new LeapYearDetector();
	});

	it('exist', () => {
		expect(detector).toBeDefined();
	});

	it('2000 is a leap year', () => {
		expect(detector.isLeapYear(2000)).toBeTruthy();
	});

	it('2800 is a leap year', () => {
		expect(detector.isLeapYear(2000)).toBeTruthy();
	});
});