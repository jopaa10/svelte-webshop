<script>
  // pages
  import Login from "./pages/Login.svelte";
  import Products from "./pages/Products.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";

  //router
  import { Router, Route, Link } from "svelte-routing";

  //components
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Sidebar from "./components/Navbar/Sidebar.svelte";

  import globalStore from "./stores/globalStore";
  import Cart from "./components/Cart/Cart.svelte";
  import Alert from "./components/Alert.svelte";
</script>

<Router>
  <Navbar />
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.cart}
    <Cart />
  {/if}
  {#if $globalStore.alert}
    <Alert />
  {/if}
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/checkout" component={Checkout} />
  <Route path="/products" component={Products} />
  <Route path="/products/:id" component={ProductTemplate} />
</Router>
