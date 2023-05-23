<script>
  export let product;
  import { link } from "svelte-routing";

  const { image, id } = product;
  const { title, price } = product.attributes;

  console.log(product);
</script>

<article class="product">
  <div class="img-container">
    <img src={image} alt={title} />
    <a href={`/products/${id}`} class="btn btn-primary product-link" use:link
      >details</a
    >
  </div>
  <div class="product-footer">
    <p class="product-title">{title}</p>
    <p class="product-price">${price}</p>
  </div>
</article>
