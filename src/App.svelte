<script lang="ts">
	import ChessCom from './chess-com.svelte';
	import Lichess from './lichess.svelte';

	import type { WebChess, ZeroOrOne } from './types';

	export let lichessName: string;
	export let chessComName: string;

	let curPage: ZeroOrOne = 0;

	let notPageName: WebChess;
	$: notPageName = curPage === 0 ? 'lichess' : 'chess.com';
</script>

<svelte:head>
	<meta property="og:site_name" content="Chess Stats" />
	<meta property="og:title" content="Chess Stats" />
	<meta
		property="og:description"
		content="Display your online chess stats on the web."
	/>
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content="https://makiyu-py.github.io/chess-stats/"
	/>
	<meta property="og:image" content="favicon.png" />
	<meta title="theme-color" content="#32373d" />
	<title>Chess Stats</title>
</svelte:head>

<main>
	<button on:click={() => (curPage = curPage === 0 ? 1 : 0)}
		>Switch to {notPageName}</button
	>
	{#if curPage === 0}
		<ChessCom name={chessComName} />
	{:else}
		<Lichess name={lichessName} />
	{/if}
</main>
