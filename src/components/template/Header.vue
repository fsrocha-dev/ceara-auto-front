<template>
    <header class="header">
        Header
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
        grid-area: header;
        background: blue;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
