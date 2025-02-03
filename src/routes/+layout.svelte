<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>Coffeeandcream</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Inter:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
