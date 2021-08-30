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

<main>
	<button on:click={() => (curPage = curPage === 0 ? 1 : 0)}
		>Switch to {notPageName}</button
	>
	<svelte:component
		this={statsComponents[curPage].component}
		{...statsComponents[curPage].props}
	/>
</main>
