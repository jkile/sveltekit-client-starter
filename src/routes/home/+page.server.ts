import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	const session = cookies.get('id');
	if (!session) {
		return redirect(308, '/login');
	}
};
