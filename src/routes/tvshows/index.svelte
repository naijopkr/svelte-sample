<script context="module">
    export function preload() {
        return this.fetch('tvshows.json').then(r => {
            return r.json()
        }).then(tvshows => {
            return { tvshows }
        })
    }
</script>

<script>
    export let tvshows
</script>

<svelte:head>
    <title>Tv Shows</title>
</svelte:head>

<h1>Tv Shows</h1>

<ul>
    {#each tvshows as tvshow}
    <li><a rel="prefetch" href="tvshows/{tvshow.id}">{tvshow.name}</a></li>
    {/each}
</ul>
