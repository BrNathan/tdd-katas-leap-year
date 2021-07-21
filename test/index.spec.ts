import { LeapYearDetector } from '../src/index';

describe('LeapYearDetector - ', () => {
	let detector: LeapYearDetector;

	beforeEach(() => {
		detector = new LeapYearDetector();
	});

	it('exist', () => {
		expect(detector).toBeDefined();
	});

	it('400 is a leap year', () => {
		expect(detector.isLeapYear(400)).toBeTruthy();
	});

	it('401 is a not leap year', () => {
		expect(detector.isLeapYear(401)).toBeFalsy();
	});
});