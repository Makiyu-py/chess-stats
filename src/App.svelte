<script lang="ts">
  import { fetchBase } from "./fetcher";

  export let lichessName: string;
  export let chessComName: string;
  const chessComRes = fetchBase({
    url: `https://api.chess.com/pub/player/${chessComName}/stats`,
  });
</script>

<main>
  {#await $chessComRes}
    <h1>Loading chess.com data...</h1>
  {:then data}
    <h1>{chessComName}'s chess.com Ratings</h1>
    <ul>
      {#each Object.entries(data) as chessModes}
        {#if "last" in chessModes[1]}
          <li>{chessModes[0]}: {chessModes[1].last.rating}</li>
        {/if}
      {/each}
    </ul>
  {/await}
</main>

<style>
  li {
    text-transform: capitalize;
  }
</style>
