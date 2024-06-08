<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	export let data: PageData;

	const userId = data.userId;
	const query = createQuery({
		queryKey: ['user', userId],
		queryFn: async () => (await fetch('/api/users')).json()
	});
	console.log($query.data);
</script>

{#if $query.isLoading}
	<p>Loading...</p>
{:else if $query.isError}
	<p>Error: {$query.error.message}</p>
{:else if $query.data}
	<h1>Hello {$query.data.username}</h1>
{/if}
