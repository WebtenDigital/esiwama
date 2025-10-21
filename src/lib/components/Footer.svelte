<script lang="ts">
    import { PUBLIC_WHATSAPPNUMBER } from '$env/static/public';

    const links = [
        {
            name: "Home",
            linkurl: "/"
        },
                {
            name: "About",
            linkurl: "/about"
        },
                {
            name: "Services",
            linkurl: "/services"
        },
                {
            name: "Contact",
            linkurl: "/contact"
        }
    ]

    // const startyear=new Date("January 1, 2018").getFullYear() //2018
    const currentyear=new Date().getFullYear()
    // const displayedDate=currentyear - startyear

</script>

<footer class="py-4 lg:py-8 bg-black text-white lg:text-lg">
    <div class="w-10/12 mx-auto grid grid-cols-2 lg:grid lg:grid-cols-3 gap-x-0">
        <section class="">
            <h2 class="pb-2 text-esiorange text-3xl font-bold">MENU</h2>
            {#each links as linkitem}
                <a href={linkitem.linkurl} class="block py-4 uppercase">{linkitem.name}</a>
            {/each}

            <div id="social links" class="pt-8 lg:flex lg:items-center lg:space-x-4">
                <a href={`https://wa.me/${PUBLIC_WHATSAPPNUMBER}`} target="_blank" aria-label="social link" class="block">
                    <svg class="h-8 w-8 fill-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m.057 24 1.687-6.163a11.87 11.87 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347s-1.758-.868-2.031-.967c-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165s-.347.223-.644.074-1.255-.462-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074 2.095 3.2 5.076 4.487c.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413s.248-1.29.173-1.414"/></svg>
                </a>
                <div class="py-2"></div>
                <a href="https://x.com/esiwama" target="_blank" aria-label="social link" class="block">
                    <svg class="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>                            
                </a>
            </div>

        </section>
        <section class="">
            <h2 class="pb-2 text-esiorange text-3xl font-bold">CONTACTS</h2>
            <h2 class="py-2 font-bold">Email</h2>
            <p>info@esiwamagroup.com</p>
            <p>esiwama@gmail.com</p>

            <div class="py-4">
                <h2 class="py-2 font-bold">Call</h2>
                <p>+256 394-500-842,</p>
                <p>+256 782-383-300</p>
            </div>

           
            <h2 class="py-2 font-bold">Location</h2>
            <p class="lg:hidden">Entebbe Road, Zana-Lufuka Zone Opp. Blue Star Express Hotel, P.O.Box 30084 Kampala, Uganda</p>
            <p class="hidden lg:block">Entebbe Road, Zana-Lufuka Zone <br> Opp. Blue Star Express Hotel, P.O.Box 30084<br> Kampala, Uganda</p>


        </section>
        <section class="hidden lg:block">
            <h2 class="pb-2 text-esiorange text-3xl font-bold">REQUEST QUOTE</h2>
            <form action="/" class="py-8">
                <!-- <label for="quoteemail" class=""> -->
                    <input id="quoteemail" type="email" placeholder="Enter Your Email" class="w-full py-4 px-4 bg-white rounded-2xl text-gray-600 placeholder:text-gray-400 foucs: outline-none">
                    <button class="my-4 py-4 block w-full text-center bg-esiorange uppercase rounded-2xl cursor-pointer">Submit</button>
                    <!-- </label> -->
            </form>
            <p class="mt-10 px-4 py-4 text-esiorange">{`© ESIWAMA Consults Limited ${currentyear}. All rights reserved`}</p>

        </section>

    </div>
    <p class="px-4 py-4 lg:hidden">{`© ESIWAMA Consults Limited ${currentyear}. All rights reserved`}</p>
</footer>