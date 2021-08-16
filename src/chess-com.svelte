<script lang="ts">
    import { fetchBase } from "./fetcher";

    export let name: string;
    
    const chessComRes = fetchBase({
      url: `https://api.chess.com/pub/player/${name}/stats`,
    });
  </script>
  
  <main>
    {#await $chessComRes}
      <h1>Loading chess.com data...</h1>
    {:then data}
      <h1>{name}'s chess.com Ratings</h1>
      <ul>
        {#each Object.entries(data) as chessModes}
          {#if "last" in chessModes[1]}
            <li>{chessModes[0].slice(6)}: {chessModes[1].last.rating}</li>
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
  