<script lang="ts">
	import { slide } from 'svelte/transition';
	import { fetchamtCache, fetchBase } from './fetcher';
	import type { lichessProfileInterface } from './types';

	export let name: string;
	let urlforFetch = `https://lichess.org/api/user/${name}`;
	const lichessRes = fetchBase<lichessProfileInterface>({
		url: urlforFetch,
	});
</script>

<main>
	{#await $lichessRes}
		<h1>Loading lichess data...</h1>
	{:then data}
		<h1>{name}'s lichess Ratings</h1>
		<ul>
			{#await data.data then stats}
				{#if data.isStale || fetchamtCache.get(urlforFetch) === 1}
					{#each Object.entries(stats.perfs) as chessModes}
						{#if "games" in chessModes[1] && chessModes[1].games > 0}
							<li in:slide|preventDefault={{ duration: 500 }}>
								{chessModes[0]}: {chessModes[1].rating}
							</li>
						{/if}
					{/each}
				{:else}
					{#each Object.entries(stats.perfs) as chessModes}
						{#if "games" in chessModes[1] && chessModes[1].games > 0}
							<li>
								{chessModes[0]}: {chessModes[1].rating}
							</li>
						{/if}
					{/each}
				{/if}
			{/await}
		</ul>
	{/await}
</main>

<style>
	li {
		text-transform: capitalize;
	}
</style>
