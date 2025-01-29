<script lang="ts">
	const dashArray = (r: number): string => {
		const circleLength = 2 * Math.PI * r
		return `${circleLength * 0.75} ${circleLength * 0.25}`
	}
</script>

<div class="wrap">
	<svg width="100" height="100" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="40" />
		<circle cx="50" cy="50" r="30" stroke-dasharray={dashArray(30)} />
		<circle cx="50" cy="50" r="20" stroke-dasharray={dashArray(20)} />
	</svg>
	<h1>coffeeandcream</h1>
</div>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: var(--black);
		color: var(--cream-med);
		font-family: 'Comfortaa', sans-serif;
		text-align: center;
	}
	h1 {
		font-weight: 300;
		margin-top: 1rem;
	}
	circle {
		transform-origin: 50% 50%;
		transform: rotate(45deg);
		stroke: var(--cream-med);
		stroke-width: 2;
		stroke-linecap: round;
		fill: none;
	}
</style>
