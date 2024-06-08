// import type { Handle } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';

// const unprotectedRoutes: string[] = ['/', '/login', '/signup'];
// export const handle: Handle = async ({ event, resolve }) => {
// 	const session = event.cookies.get('id');
// 	if (!session && !unprotectedRoutes.includes(event.url.pathname)) return redirect(303, '/login');

// 	return resolve(event);
// };
