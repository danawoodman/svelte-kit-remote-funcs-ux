<script lang="ts">
	import { getData } from '../data.remote';

	const data = getData();

	// NOTE: using the below does allow client-first loading of data
	// vs blocking the page until the data is loaded:
	// let data = $state<ReturnType<typeof getData>>();
	// onMount(async () => {
	// 	data = getData();
	// });
</script>

<section class="flex flex-col gap-4">
	<aside class="flex items-center gap-4">
		<!-- NOTE: cannot show loading indicator because no way to access loading state... -->
		<a href="/" class="btn btn-square btn-neutral">←</a>
		<button class="btn btn-primary" disabled={data?.loading} onclick={() => data?.refresh()}>
			{#if data?.loading}
				Loading...
			{:else}
				Refresh
			{/if}
		</button>
	</aside>

	{#if data?.error}
		<p class="text-error">{data.error.message}</p>
	{:else if data?.loading}
		<p class="text-neutral-content">Loading...</p>
	{:else}
		{#each data?.current as { id, title, slug, content } (id)}
			<article>
				<a class="link link-primary" href="/blog/{slug}">
					<strong>{title}</strong>
				</a>
				<p>
					{content}
				</p>
			</article>
		{/each}
	{/if}
</section>
