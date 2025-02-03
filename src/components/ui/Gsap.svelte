<!-- App.svelte -->
<script lang="ts">
	import { gsap } from 'gsap'

	let container: HTMLDivElement
	let title: HTMLHeadingElement
	let subtitle: HTMLParagraphElement
	let button: HTMLButtonElement

	$effect(() => {
		if (!container || !title || !subtitle || !button) return

		// Create a timeline for sequential animations
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

		// Initial states
		gsap.set([title, subtitle, button], {
			y: 100,
			opacity: 0
		})
		gsap.set(container, {
			opacity: 0
		})

		// Animation sequence
		tl.to(container, {
			opacity: 1,
			duration: 0.5
		})
			.to(title, {
				y: 0,
				opacity: 1,
				duration: 0.8
			})
			.to(
				subtitle,
				{
					y: 0,
					opacity: 1,
					duration: 0.8
				},
				'-=0.4'
			) // Start slightly before previous animation ends
			.to(
				button,
				{
					y: 0,
					opacity: 1,
					duration: 0.8
				},
				'-=0.4'
			)

		// Cleanup function
		return () => {
			tl.kill()
		}
	})
</script>

<div
	class="h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
	bind:this={container}
>
	<h1 bind:this={title} class="text-6xl font-bold mb-4">Welcome</h1>

	<p bind:this={subtitle} class="text-xl text-gray-300 mb-8">Experience something amazing</p>

	<button
		bind:this={button}
		class="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
	>
		Get Started
	</button>
</div>

<svg width="100" height="100" viewBox="0 0 100 100"
	><circle cx="50" cy="50" r="40"></circle>
	<circle cx="50" cy="50" r="30" stroke-dasharray="141.37166941154067 47.12388980384689"
	></circle><circle cx="50" cy="50" r="20" stroke-dasharray="94.24777960769379 31.41592653589793"
	></circle></svg
>
