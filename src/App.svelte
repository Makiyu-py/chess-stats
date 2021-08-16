<script lang="ts">
  import ChessCom from "./chess-com.svelte";
  import Lichess from "./lichess.svelte";

  import type { WebChess, ZeroOrOne } from "./types";

  export let lichessName: string;
  export let chessComName: string;

  let curPage: ZeroOrOne = 0;

  let notPageName: WebChess;
  $: notPageName = curPage === 0 ? "lichess" : "chess.com";
</script>

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
