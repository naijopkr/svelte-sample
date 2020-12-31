<script context="module">
    export function preload() {
        return this.fetch('product.json').then(r => {
            return r.json()
        }).then(products => {
            return { products }
        })
    }
</script>

<script>
    export let products
</script>

<svelte:head>
    <title>Products</title>
</svelte:head>

<h1>Products</h1>

<ul>
    {#each products as product}
    <li><a rel="prefetch" href="product/{product.ean}">{product.name}</a></li>
    {/each}
</ul>

<form action='/product' method='POST'>
    <input name='ean' />
    <input name='name' />
    <input name='description' />
    <input name='price' />
    <button type='submit' />
</form>
