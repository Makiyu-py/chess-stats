<script lang="ts">
	import { fetchamtCache } from './fetcher';
	import { slide } from 'svelte/transition';

	import { fetchBase } from './fetcher';
	import type { chessComStatsObj } from './types';

	export let name: string;

	let urlforFetch = `https://api.chess.com/pub/player/${name}/stats`;
	const chessComRes = fetchBase<chessComStatsObj>({
		url: urlforFetch,
	});
</script>

<main>
	{#await $chessComRes}
		<h1>Loading chess.com data...</h1>
	{:then data}
		<h1>{name}'s chess.com Ratings</h1>
		<ul>
			{#await data.data then stats}
				{#if data.isStale || fetchamtCache.get(urlforFetch) === 1}
					{#each Object.entries(stats) as chessModes}
						{#if 'last' in chessModes[1]}
							<li in:slide|preventDefault={{ duration: 500 }}>
								{chessModes[0].startsWith('chess_')
									? chessModes[0].slice(6)
									: chessModes[0].split('_').join(' ')}: {chessModes[1].last
									.rating}
							</li>
						{/if}
					{/each}
				{:else}
					{#each Object.entries(stats) as chessModes}
						{#if 'last' in chessModes[1]}
							<li>
								{chessModes[0].startsWith('chess_')
									? chessModes[0].slice(6)
									: chessModes[0].split('_').join(' ')}: {chessModes[1].last
									.rating}
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
