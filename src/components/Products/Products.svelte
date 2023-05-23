<script>
  export let title = "";

  import products from "../../stores/products";
  import Loading from "../Loading.svelte";
  import Product from "./Product.svelte";
</script>

{#if $products}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each $products as product (product.id)}
        <Product {product} />
      {:else}
        <Loading />
      {/each}
    </div>
  </section>
{/if}
