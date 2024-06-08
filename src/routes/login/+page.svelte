<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { LoginForm, LoginFailedAlert } from '$lib/components/login-form';
	export let data: PageData;
	export let form: ActionData;
	$: failAlert = false;
	$: setFailAlert(form);

	function setFailAlert(form: ActionData) {
		if (form?.success === false) {
			failAlert = true;
			setTimeout(() => {
				failAlert = false;
			}, 2500);
		}
	}
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="flex flex-col">
		<h2 class="mx-auto text-3xl font-bold text-gray-800">Sign in to your account</h2>
	</div>
	<div class="mx-4 mt-10 max-w-lg rounded-md border p-6 shadow-sm">
		<LoginForm data={data.form} />
	</div>
	{#if failAlert === true}
		<LoginFailedAlert class="" />
	{/if}
	<div>
		<p class="mt-4 text-center text-sm text-gray-400">
			Don't have an account? <a
				href="/signup"
				class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
				>Click here to sign up</a
			>
		</p>
	</div>
</div>
