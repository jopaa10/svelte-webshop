<script>
  //cart button

  import { link } from "svelte-routing";
  import CartButton from "../Cart/CartButton.svelte";

  //global store
  import globalStore from "../../stores/globalStore";

  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
  <div class="nav-center">
    <button
      class="btn-sidebar-toggle"
      on:click={() => openSidebar("sidebar", true)}
    >
      <i class="fas fa-bars" />
    </button>
    <a href="/" class="nav-logo" use:link>
      <img src="/assets/images/logo.svg" class="logo" alt="razers logo" />
    </a>
    <CartButton />
  </div>
</nav>
