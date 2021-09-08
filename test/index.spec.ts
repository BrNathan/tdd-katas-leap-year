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
		expect(detector.isLeapYear(2800)).toBeTruthy();
	});

	it('1800 is a not leap year', () => {
		expect(detector.isLeapYear(1800)).toBeFalsy();
	});

	it('2008 is a leap year', () => {
		expect(detector.isLeapYear(2008)).toBeTruthy();
	});

	it('2018 is a not leap year', () => {
		expect(detector.isLeapYear(2018)).toBeFalsy();
	});
});