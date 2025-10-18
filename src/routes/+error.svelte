<script lang="ts">
    import Menu from "$lib/components/Menu.svelte";
</script>

<main>
    <!-- menu -->
    <div class="">
        <div class="bg-[url('$lib/assets/404.png')] bg-cover min-h-screen">
            <div class="w-11/12 mx-auto pt-8 lg:w-10/12"><Menu logotype="logowhite" menutype="nobg" hamburgercolor="white"/></div>
            <div class="w-11/12 mx-auto lg:w-10/12">
                <p class="pt-20 font-dmsans text-8xl text-center font-bold">OOPS</p>
                <p class="pt-20 font-dmsans text-4xl text-white text-center font-bold">CAN'T FIND THE PAGE YOU ARE LOOKING FOR</p>
                <p class="pt-20 font-dmsans text-[200px] text-right font-bold">404</p>
            </div>
        </div>
    </div>
</main>