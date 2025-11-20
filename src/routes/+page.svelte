<section class="flex flex-col gap-4">
	<h1 class="text-2xl font-bold">Remote Functions</h1>

	<ul class="flex max-w-lg list-inside list-disc flex-col gap-2">
		<li>
			<a href="/await" class="link link-primary">Await</a> — loading the data via an
			<code class="kbd">await</code> which does allow client-first loading of data but makes it
			impossible to access loading state outside of the <code class="kbd">svelte:boundary</code>
			block and doesn't re-trigger the <code class="kbd">pending</code> snippet so you can't use a loading
			state indicator.
		</li>
		<li>
			<a href="/script" class="link link-primary">Script</a> — loading the data via a script tag
			which allows for the entire component to hook into the <code class="kbd">.error</code> and
			<code class="kbd">.loading</code> properties but requires using
			<code class="kbd">onMount</code> to do client-first loading of data.
		</li>
	</ul>
</section>
