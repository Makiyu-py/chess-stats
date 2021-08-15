import type { fetchparams } from "./types";
import { writable } from "svelte/store";

// Reference:
//  https://www.youtube.com/watch?v=IUHkSoBxyLM

const cache = new Map();

export function fetchBase(params: fetchparams) {
  const store = writable(new Promise(() => {}));

  if (cache.has(params.url)) {
    store.set(Promise.resolve(cache.get(params.url)));
  }
  const load = async () => {
    const resp = await fetch(params.url, params.options ?? {});
    const data = resp.json();
    cache.set(params.url, data);
    store.set(Promise.resolve(data));
  };

  load();
  return store;
}
