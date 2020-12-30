<script context="module">
    export function preload() {
        return this.fetch('batch.json').then(r => {
            return r.json()
        }).then(batches => {
            return { batches }
        })
    }
</script>

<script>
    export let batches
</script>

<svelte:head>
    <title>Batches</title>
</svelte:head>

<h1>Batches</h1>

<ul>
    {#each batches as batch}
    <li><a rel="prefetch" href="batch/{batch.code}">{batch.code}</a></li>
    {/each}
</ul>
