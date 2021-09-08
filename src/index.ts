export class LeapYearDetector {
	private readonly DIVIDE400 = 400;

	/**
	 * isLeapYear
	 */
	public isLeapYear(year: number): boolean {
		if (year % 100 === 0 && year % this.DIVIDE400 !== 0) {
			return false;
		}
		else if (year % 4 === 0 && year % 100 !== 0) {
			return true;
		}
		return year % this.DIVIDE400 === 0;
	}
}