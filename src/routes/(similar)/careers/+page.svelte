<script>
    import Hero from "$lib/components/Hero.svelte";
    import Seo from "$lib/components/Seo.svelte";

</script>

<Seo title="Careers" description=""/>


<main class="text-gray-600 lg:text-lg">
    <div id="page holder" class="w-11/12 mx-auto lg:w-10/12">
        <Hero text="Careers"/>
        <p class="lg:w-10/12 mx-auto lg:text-center">Ready to start making an impact? Get in touch with us for current available opportunities.</p>
        
        <div class="py-4"></div>
        
        <div class="lg:w-3/12 lg:mx-auto">
            <a href="/contact" class="my-8 flex items-center gap-x-2">
                <p class="w-full py-3 px-4 rounded-2xl bg-esigreen text-white text-center">Get in touch</p>
                <div id="arrow" class="py-3 px-4 bg-esigreen text-white rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </a>
        </div>
    </div>
    <div class="lg:py-8"></div>
</main>