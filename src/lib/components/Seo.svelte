<script lang="ts">
    let props=$props(); //title | description
</script>

<svelte:head>
    <title>{`${props.title} | Esiwama Group`}</title>
    <meta property="description" content={props.description}>
    <meta property="og:title" content={props.title}>
    <meta property="og:description" content={props.description}>
</svelte:head>