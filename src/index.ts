export class LeapYearDetector {
	private readonly DIVIDE400 = 400;

	/**
	 * isLeapYear
	 */
	public isLeapYear(year: number): boolean {
		return year%this.DIVIDE400 === 0;
	}
}