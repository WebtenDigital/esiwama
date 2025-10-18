<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import Menu from '$lib/components/Menu.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- MENU -->
<div class="w-11/12 mx-auto pt-8 lg:w-10/12"><Menu/></div>

{@render children?.()}

<!-- FOOTER -->