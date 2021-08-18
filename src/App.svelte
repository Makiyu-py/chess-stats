<script lang="ts">
	import ChessCom from './chess-com.svelte';
	import Lichess from './lichess.svelte';

	import type { WebChess, ZeroOrOne } from './types';

	export let lichessName: string;
	export let chessComName: string;

	let curPage: ZeroOrOne = 0;

	let notPageName: WebChess;
	$: notPageName = curPage === 0 ? 'lichess' : 'chess.com';

	let statsComponents = [
		{ props: { name: chessComName }, component: ChessCom },
		{ props: { name: lichessName }, component: Lichess },
	];
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
	<meta
		property="og:image"
		content="https://twemoji.maxcdn.com/v/latest/72x72/265f.png"
	/>
	<meta name="theme-color" content="#32373d" />
	<title>Chess Stats</title>
</svelte:head>

<main>
	<button on:click={() => (curPage = curPage === 0 ? 1 : 0)}
		>Switch to {notPageName}</button
	>
	<svelte:component
		this={statsComponents[curPage].component}
		{...statsComponents[curPage].props}
	/>
</main>
