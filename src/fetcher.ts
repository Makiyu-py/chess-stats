import type { fetchparams, fetchStoreRes } from './types';
import { Writable, writable } from 'svelte/store';

// Reference:
//  https://www.youtube.com/watch?v=IUHkSoBxyLM

const cache: Map<string, fetchStoreRes<any>> = new Map();
export const fetchamtCache: Map<string, number> = new Map();

export function fetchBase<Type>(
	params: fetchparams
): Writable<Promise<fetchStoreRes<Type>>> {
	const store: Writable<Promise<any>> = writable(new Promise(() => {}));

	if (cache.has(params.url)) {
		store.set(Promise.resolve({ ...cache.get(params.url), isStale: true }));
	}
	const load = async () => {
		const resp = await fetch(params.url, params.options ?? {});
		const data: Promise<Type> = resp.json();
		const storedData: fetchStoreRes<Promise<Type>> = { data: data, isStale: false };
		cache.set(params.url, storedData);
		store.set(Promise.resolve(storedData));
		fetchamtCache.set(
			params.url,
			fetchamtCache.has(params.url) ? fetchamtCache.get(params.url) + 1 : 1
		);
	};

	load();
	return store;
}
