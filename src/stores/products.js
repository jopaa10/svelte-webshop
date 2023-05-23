import { derived, writable } from "svelte/store";
import localProducts from "../localProducts";
import getProducts from "../strapi/getProducts";
import URL from "../strapi/URL";

const store = writable([], () => {
  setProducts();
  return () => {};
});

async function setProducts() {
  let products = await getProducts();

  if (products) {
    products = flattenProducts(products);
    store.set(products);
  }
}

function flattenProducts(productData) {
  let image;
  return productData.data.map((item) => {
    item.attributes.image.data.map((imageItem) => {
      image = `${URL}${imageItem.attributes.url}`;
    });
    return { ...item, image };
  });
}

//featured store
export const featuredStore = derived(store, ($featured) => {
  return $featured.filter((item) => item.featured === true);
});

export default store;
