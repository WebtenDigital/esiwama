<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/esi-favicon.png';
	import lake from "$lib/assets/lake.webp";
	import whatsappdisplay from "$lib/assets/whatsappbot.png"
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';
	import { PUBLIC_WHATSAPPNUMBER } from '$env/static/public';
	
	let { children } = $props();
  
	let hideElement = $state<boolean>(false);
  	let targetElement = $state<HTMLDivElement>();
  	let observer = $state<IntersectionObserver>();

	let showwhatsappdisplay = $state<boolean>(false);
	const whatsappnumber = PUBLIC_WHATSAPPNUMBER;
  
  onMount(() => {
    // Create intersection observer
    observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          // When target element enters viewport (scrolled past)
          if (entry.isIntersecting) {
            hideElement = true;
          } else {
            // Optionally show again when scrolling back up
            hideElement = false;
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px'
      }
    );
    
    // Start observing the target element
    if (targetElement) {
      observer.observe(targetElement);
    }
    
    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:image" content={lake}>
    <meta property="og:url" content="https://esiwamagroup.com">
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Esiwama Group",
            "url": "https://esiwamagroup.com",
        }
    </script>
</svelte:head>


	<main class="relative">
		{#if !hideElement}
		<div class="">
			<!-- the bigger display -->
			 {#if showwhatsappdisplay}
				<div class="p-2 fixed right-[1%] bottom-[22%] z-50 text-right lg:p-0 lg:right-[2%] lg:bottom-[21%]">
					<div class="relative">
						<!-- x button -->
						<button onclick={()=>{showwhatsappdisplay=false}} aria-label="x button" class="p-2 absolute top-4 right-4 cursor-pointer"> 
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-white ">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
						<img src={whatsappdisplay} alt="whatsapp chat" class="rounded-3xl shadow-2xl md:h-96 lg:w-full">
						
						<!-- cta -->
						 <div class="absolute bottom-5 right-0 w-full px-4">
							<a href={`https://wa.me/${whatsappnumber}`} target="_blank" class="flex items-center justify-between w-full px-6 py-4 rounded-3xl cursor-pointer bg-[#25d366] text-white lg:text-lg font-avenirnext">
								<div id="whatsapp icon" class="">
									<svg class="fill-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m.057 24 1.687-6.163a11.87 11.87 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347s-1.758-.868-2.031-.967c-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165s-.347.223-.644.074-1.255-.462-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074 2.095 3.2 5.076 4.487c.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413s.248-1.29.173-1.414"/></svg>								</div>
								<p class="text-center">Chat on WhatsApp</p>
								<div id="tilted arrow" class="">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-white">
										<path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
									</svg>
								</div>
							</a>
						 </div>
					</div>
				</div>
			 {/if}
			<!-- whatsapp button -->
			<button id="whatsapp chat" class="block fixed right-[5%] bottom-[15%] z-50 cursor-pointer lg:right-[2%] lg:bottom-[10%]" aria-label="whatsapp" onclick={()=>{showwhatsappdisplay=!showwhatsappdisplay}}>
				<div class="relative"></div>
				<div class="fixed right-[5%] bottom-[20%] z-50 lg:right-[2%] lg:bottom-[17%]">
					<svg class="h-3 w-3 fill-red-500 lg:h-4 lg:w-4" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24"><circle cx="11.998" cy="11.998" r="9.998" fill-rule="nonzero"/></svg>
				</div>
				<svg class="fill-[#25d366] h-14 w-14 lg:h-20 lg:w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.031 6.172a5.773 5.773 0 0 0-5.768 5.766c-.001 1.298.38 2.27 1.019 3.287L6.7 17.353l2.182-.573c.978.58 1.911.928 3.145.929a5.776 5.776 0 0 0 5.768-5.766 5.764 5.764 0 0 0-5.764-5.771m3.392 8.244c-.144.405-.837.774-1.17.824a2.4 2.4 0 0 1-1.092-.069c-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617s-.708-.94-.708-1.793.448-1.273.607-1.446a.64.64 0 0 1 .462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287s.072.188.014.304-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354s.449.741.964 1.201c.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m.029 18.88a6.94 6.94 0 0 1-3.318-.844L5.034 19l.984-3.595a6.9 6.9 0 0 1-.926-3.468C5.093 8.112 8.205 5 12.029 5a6.9 6.9 0 0 1 4.907 2.034 6.9 6.9 0 0 1 2.03 4.908c-.001 3.825-3.113 6.938-6.937 6.938"/></svg>
			</button>
		</div>

		{/if}

		{@render children?.()}


		<div class="" bind:this={targetElement}><Footer/></div>
	</main>





