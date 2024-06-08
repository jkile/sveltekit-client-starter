import type { PageLoad } from './$types';
export const load: PageLoad = async (event) => {
	const { queryClient } = await event.parent();
	const userId = event.params.userId;
	await queryClient.prefetchQuery({
		queryKey: ['user', userId],
		queryFn: async () => (await event.fetch('/api/users')).json()
	});
	return {
		userId: event.params.userId
	};
};
