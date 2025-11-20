<script lang="ts">
	import { getData } from '../data.remote';
</script>

<section class="flex flex-col gap-4">
	<svelte:boundary>
		<aside class="flex items-center gap-4">
			<!-- NOTE: cannot show loading indicator because no way to access loading state... -->
			<a href="/" class="btn btn-square btn-neutral">←</a>
			<button class="btn btn-primary" onclick={() => getData().refresh()}> Refresh </button>
		</aside>

		{#each await getData() as { id, title, slug, content } (id)}
			<article>
				<a class="link link-primary" href="/blog/{slug}">
					<strong>{title}</strong>
				</a>
				<p>
					{content}
				</p>
			</article>
		{/each}

		{#snippet pending()}
			<p class="text-neutral-content">Loading...</p>
		{/snippet}

		{#snippet failed(error, reset)}
			<p class="text-error">{error?.message}</p>
		{/snippet}
	</svelte:boundary>
</section>
