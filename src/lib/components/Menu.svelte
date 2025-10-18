<script lang="ts">
    import logocolored from "$lib/assets/esiwama-logo-colored.png"
    import logoblack from "$lib/assets/esiwama-logo-bw.png"
    import logowhite from "$lib/assets/esiwama-white.png"

    let props=$props(); //logotype="logoblack, logowhite or logocolored | menutype = nobg" | hamburgercolor="white"

    const menuitems=[
        {
            linkname: "about",
            url: "/about"
        },
                {
            linkname: "services",
            url: "/services"
        },
                {
            linkname: "contact",
            url: "/contact"
        }
    ]
</script>


<main>
    <!-- MOBILE MENU -->
    <section class="lg:hidden" id="mobile menu">
        <nav class="px-2 flex justify-between items-center">
            <div id="logo" class="w-28 text-left"><a href="/">
                <img src={props.logotype=="logoblack"?logoblack:props.logotype=="logowhite"?logowhite:logocolored} alt={props.logotype=="logoblack"?"Esiwama Logo B/W":"Esiwama Logo Colored"}>
            </a></div>
            
            <div id="space-holder" class="w-6/12 mx-auto bg-green-500"></div>

            <div id="hamburger-menu" class="">
                <button aria-label="hamburger" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class={`h-10 w-10 ${props.hamburgercolor=="white"?"text-white":""}`} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>            
                </button>
            </div> 
        </nav>
    </section>

    <!-- LG MENU -->
    <section class="hidden lg:block">
        <nav class="flex items-center justify-between">
            <div class="w-36">
                <a href="/"><img src={props.logotype=="logoblack"?logoblack:props.logotype=="logowhite"?logowhite:logocolored} alt={props.logotype=="logobw"?"Esiwama Logo B/W":"Esiwama Logo Colored"}></a>
            </div>
            
            <div class={`px-8 py-4 flex items-center ${props.menutype=="nobg"?"":"bg-esiblue"} text-white space-x-20 font-dmsans font-semibold rounded-lg`}>
                {#each menuitems as item}
                    <div class=""><a href={item.url} class="uppercase hover:text-esiorange">{item.linkname}</a></div>
                {/each}
            </div>

        </nav>
    </section>
</main>