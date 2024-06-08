<script lang="ts">
	// import ExclamationTriangle from 'svelte-radix/ExclamationTriangle.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { fade } from 'svelte/transition';
	export let errorMessage;
	let className = '';
	export { className as class };
</script>

<div
	class={`right=0 fixed bottom-0 left-0 right-0 rounded-none ${className}`}
	transition:fade={{ delay: 0, duration: 100 }}
>
	<Alert.Root variant="destructive" class="bg-red-50">
		<!-- <ExclamationTriangle class="h-4 w-4" /> -->
		<Alert.Title>Error</Alert.Title>
		<Alert.Description>Signup failed!: {$errorMessage}</Alert.Description>
	</Alert.Root>
</div>
