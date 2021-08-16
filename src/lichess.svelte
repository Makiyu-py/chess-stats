<script lang="ts">
  import { fetchBase } from "./fetcher";

  export let name: string;
  console.log(name);
  const lichessRes = fetchBase({
    url: `https://lichess.org/api/user/${name}`,
  });
</script>

<main>
  {#await $lichessRes}
    <h1>Loading lichess data...</h1>
  {:then data}
    <h1>{name}'s lichess Ratings</h1>
    <ul>
      {#each Object.entries(data.perfs) as chessModes}
        {#if chessModes[1].games > 0}
          <li>{chessModes[0]}: {chessModes[1].rating}</li>
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
