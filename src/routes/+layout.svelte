<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<main class="container mx-auto py-12">
	{@render children()}
</main>
