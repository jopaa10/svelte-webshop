<script>
  import BigNavbar from "./BigNavbar.svelte";
  import SmallNavbar from "./SmallNavbar.svelte";

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth < 992}
  <SmallNavbar />
{:else}
  <BigNavbar />
{/if}
