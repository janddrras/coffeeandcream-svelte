export const dashArray = (r: number): string => {
	const circleLength = 2 * Math.PI * r
	return `${circleLength * 0.75} ${circleLength * 0.25}`
}
