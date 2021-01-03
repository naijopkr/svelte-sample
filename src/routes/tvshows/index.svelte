<script context="module">
    import TvShowCard from '../../components/TvShowCard.svelte'

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

{#each tvshows as tvshow}
<a rel="prefetch" href="tvshows/{tvshow.id}"><TvShowCard name={tvshow.name} description={tvshow.description} releaseYear={tvshow.releaseYear} /></a>
{/each}
