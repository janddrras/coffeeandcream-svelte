<script lang="ts">
	import { gsap } from 'gsap'
	import { paths } from '$lib/logo'
	import { draw } from 'svelte/transition'

	const name = 'coffeeandcream'
	let startDrawing = $state(false)

	$effect(() => {
		const title = document.querySelectorAll('.letter')

		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

		tl.add(() => {
			startDrawing = true
		}).from(title, {
			y: 30,
			opacity: 0,
			stagger: 0.1,
			duration: 0.8,
			delay: 0.5,
			ease: 'back.out(2)'
		})
	})
</script>

<div class="wrap">
	<svg width="124" height="124" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg">
		{#if startDrawing}
			{#each paths as path, i}
				<path d={path} in:draw|global={{ duration: 800, delay: 200 * i }} />
			{/each}
		{/if}
	</svg>
	<h1>
		{#each name as letter}
			<span class="letter">{letter}</span>
		{/each}
	</h1>
	<!-- <button onclick={() => (startDrawing = !startDrawing)}>start</button> -->
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
		font-size: 2rem;
		margin-top: 2.5rem;
		span {
			display: inline-block;
		}
	}
	path {
		stroke: var(--cream-med);
		stroke-width: 2;
		stroke-linecap: round;
		fill: none;
	}
	button {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		padding: 0.5rem 1rem;
	}
</style>
