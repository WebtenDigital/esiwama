<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import Menu from '$lib/components/Menu.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
    import { onMount } from 'svelte';
	
	let { children } = $props();

	onMount(()=>{
		AOS.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- MENU -->
<div class="w-11/12 mx-auto pt-8 lg:w-10/12"><Menu/></div>

{@render children?.()}

<!-- FOOTER -->