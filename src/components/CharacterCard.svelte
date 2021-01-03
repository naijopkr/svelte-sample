<script>
    export let name
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
</style>

<div class="container">
    <div class="title">{name}</div>
</div>
