<script>
  export let id;
  export let location;

  import products from "../stores/products";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";
  import globalStore from "../stores/globalStore";
  import { addToCart } from "../stores/cart";

  $: product = $products.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!product ? "single product" : product.attributes.title}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" class="btn btn-primary" use:link>back to products</a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.image} />
      </article>
      <article>
        <h1>{product.attributes.title}</h1>
        <h2>{product.attributes.price}</h2>
        <p>{product.attributes.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(product);
            globalStore.toggleItem("cart", true);
          }}>add to cart</button
        >
      </article>
    </div>
  </section>
{/if}
