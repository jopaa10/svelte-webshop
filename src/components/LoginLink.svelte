<script>
  import user from "../stores/user";
  import { link } from "svelte-routing";
  import globalStore from "../stores/globalStore";
  import { logoutUser } from "../stores/user";
</script>

{#if $user.jwt}
  <a
    href="/"
    class="logout-btn"
    use:link
    on:click={() => {
      logoutUser();
      globalStore.toggleItem("sidebar", false);
    }}>logout</a
  >
{:else}
  <a
    href="/login"
    class="logout-btn"
    use:link
    on:click={() => {
      globalStore.toggleItem("sidebar", false);
    }}>login</a
  >
{/if}
