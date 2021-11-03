<script lang="ts">
	import ChessCom from './chess-com.svelte';
	import Lichess from './lichess.svelte';

	import type { WebChess } from './types';
	import { WebChessEnum } from './types';

	export let lichessName: string;
	export let chessComName: string;

	let curPage: WebChessEnum = WebChessEnum.chesscom;

	let notPageName: WebChess;
	$: notPageName = curPage === WebChessEnum.chesscom ? 'lichess' : 'chess.com';

	let statsComponents = [
		{ props: { name: chessComName }, component: ChessCom },
		{ props: { name: lichessName }, component: Lichess },
	];
</script>

<main>
	<button
		on:click={() =>
			(curPage =
				curPage === WebChessEnum.chesscom
					? WebChessEnum.lichess
					: WebChessEnum.chesscom)}>Switch to {notPageName}</button
	>
	<svelte:component
		this={statsComponents[curPage].component}
		{...statsComponents[curPage].props}
	/>
</main>
