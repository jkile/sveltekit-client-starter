<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { SignupForm, SignupFailedAlert } from '$lib/components/signup-form';
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

<div class="mx-auto flex h-screen max-w-xl flex-col items-center justify-center">
	<div class="flex flex-col">
		<h2 class="mx-auto text-3xl font-bold text-gray-800">Sign up for an account</h2>
	</div>
	<div class="mx-4 mt-10 max-w-lg rounded-md border p-6"><SignupForm data={data.form} /></div>
	{#if failAlert === true}
		<SignupFailedAlert class="" errorMessage={data?.errorMessage} />
	{/if}
	<div>
		<p class="mt-4 text-center text-sm text-gray-400">
			Already have an account? <a
				href="/login"
				class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
				>Click here to sign in</a
			>
		</p>
	</div>
</div>
