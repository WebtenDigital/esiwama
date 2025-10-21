<script lang="ts">
    import logocolored from "$lib/assets/esiwama-logo-colored.png"
    import logoblack from "$lib/assets/esiwama-logo-bw.png"
    import logowhite from "$lib/assets/esiwama-white.png"
    import { PUBLIC_WHATSAPPNUMBER } from "$env/static/public";

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

    let showmobilemenu = $state(false);

    let whatsappnumber=PUBLIC_WHATSAPPNUMBER;
</script>


<main>
    <!-- MOBILE MENU -->
    <section class="lg:hidden" id="mobile menu">
        <nav class="relative px-2 flex justify-between items-center">
            <div id="logo" class="w-28 text-left"><a href="/">
                <img src={props.logotype=="logoblack"?logoblack:props.logotype=="logowhite"?logowhite:logocolored} alt={props.logotype=="logoblack"?"Esiwama Logo B/W":"Esiwama Logo Colored"}>
            </a></div>
            
            <div id="space-holder" class="w-6/12 mx-auto bg-green-500"></div>

            <div id="hamburger-menu" class="">
                <button aria-label="hamburger" class="cursor-pointer" onclick={()=>{showmobilemenu=!showmobilemenu}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class={`h-10 w-10 ${props.hamburgercolor=="white"?"text-white":""}`} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>            
                </button>
            </div> 
            {#if showmobilemenu}
                <nav id="showmobilemenu" class="fixed w-full min-h-screen z-60 right-0 left-0 top-0 py-10 bg-gray-100">
                    <div id="holder" class="w-11/12 mx-auto">
                        <div id="header" class="flex items-center justify-between px-2">
                            <a href="/" id="logo" class="block"><img src={logocolored} alt="esiwama logo colored" class="h-7 w-full"></a>
                            <button aria-label="icon" id="close_button" class="block cursor-pointer" onclick={()=>{showmobilemenu=false}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-9 text-esiwamaorange">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="w-full mt-8 text-gray-300 border-b shadow-xl"></div>
                    
                    <div id="holder" class="w-11/12 mx-auto text-lg">
                        {#each menuitems as item}
                            <a href={item.url} class="flex items-center justify-between py-8 border-b border-orange-400 text-gray-600" onclick={()=>{showmobilemenu=false}}>
                                <p class="capitalize">{item.linkname}</p>
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </a>
                        {/each}
                        <a href="/careers" class="flex items-center justify-between py-8 border-b border-orange-400 text-gray-600" onclick={()=>{showmobilemenu=false}}>
                            <p class="capitalize">careers</p>
                            <div class="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <section class="text-white px-1 mt-16">
                        <a href={`https://wa.me/${whatsappnumber}`} aria-label="true" target="_blank" class="flex justify-between mx-2 px-4 py-5 bg-[#25d366] text-white rounded-[24px] hover:bg-white hover:text-[#25d366] hover:border hover:border-[#25d366] lg:py-8 lg:px-8 fill-white hover:fill-[#25d366]" onclick={()=>{showmobilemenu=false}}>
                            <p>Send us a message on WhatsApp</p>
                            <div class="block">
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m.057 24 1.687-6.163a11.87 11.87 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347s-1.758-.868-2.031-.967c-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165s-.347.223-.644.074-1.255-.462-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074 2.095 3.2 5.076 4.487c.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413s.248-1.29.173-1.414"/></svg>
                            </div>
                        </a>
                    </section>
                </nav>
            {/if}
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