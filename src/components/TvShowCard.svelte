<script>
    export let name
    export let description
    export let releaseYear
</script>

<style>
    .container {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin: 8px;
        padding: 16px;
        box-shadow: 2px 2px 4px 1px black;
    }

    .title {
        font-size: 18px;
        font-weight: 600;
    }

    .description {
        font-size: 14px;
        font-weight: normal;
    }

    .year {
        font-size: 10px;
        font-weight: normal;
    }
</style>

<div class="container">
    <div class="title">{name}</div>
    <div class="description">{description}</div>
    <div class="year">{releaseYear}</div>
</div>
