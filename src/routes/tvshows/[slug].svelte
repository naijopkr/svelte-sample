<script context="module">
    export function preload({ params }) {
        return this.fetch(`tvshows/${params.slug}.json`).then(r => {
            return r.json()
        }).then(characters => {
            return { characters }
        })
    }
</script>

<script>
    export let characters
</script>

<svelte:head>
    <title>Tv Shows</title>
</svelte:head>

<h1>Tv Shows</h1>

<ul>
    {#each characters as character}
    <li>{character.name}</li>
    {/each}
</ul>
