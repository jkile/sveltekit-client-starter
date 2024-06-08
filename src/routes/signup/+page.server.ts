import { superValidate } from 'sveltekit-superforms';
import { formSchema } from '$lib/components/login-form';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const data = form.data;
		const res = await event.fetch('/api/users/signup', {
			method: 'POST',
			body: new URLSearchParams(`username=${data.username}&password=${data.password}`)
		});
		if (res.status === 200) {
			return redirect(302, '/home');
		} else {
			return { success: false };
		}
	}
};
