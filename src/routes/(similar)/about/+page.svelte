<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import arch from "$lib/assets/houseplan.jpg"
    import Heading from "$lib/components/Heading.svelte";
    import CTA from "$lib/components/CTA.svelte";

    import leaf from "$lib/assets/leaf.png"
    import cows from "$lib/assets/cows.jpg"
    import meeting from "$lib/assets/meeting - 2.jpg"
    import ctahandshake from "$lib/assets/cta-handshake.png"



</script>

<main class="text-gray-600 lg:text-lg">
    <div id="page holder" class="w-11/12 mx-auto lg:w-10/12">
        <Hero text="About Us"/>

        <section class="lg:grid lg:grid-cols-2 lg:gap-x-12">
            <div id="lg-left">
                <div class=""><img src={arch} alt="architectural design" class="rounded-4xl shadow-xl lg:shadow-3xl"></div>
                <div class="hidden lg:block pt-4">
                    <div class="py-2 w-2/12 mx-auto"><img src={leaf} alt="leaf icon" class="animate-pulse"></div>
                    <CTA url="/services" bgcolor="esiorange" text="our services" textcolor="white"/>
                </div>
            </div>

            <div id="lg-right" class="">
                <p class="py-8 lg:py-0">ESIWAMA is a multi-disciplinary firm specialising in delivering professional consultancy, advisory, and technical expertise across Architecture, Engineering, Economics, Finance, Health & Safety, as well as Environment and Social Management sectors.
                    We guide, plan, and design the future of the built, social, and development environment. Through a unique blend of technical know-how and advisory expertise, we help governments, institutions, and organizations translate ideas into sustainable, high-impact projects.
                    Our commitment is to deliver solutions that not only meet today’s needs but also create opportunities for future generations. By integrating engineering precision with a deep understanding of social systems, we ensure every project leaves a lasting positive footprint.
                </p>
                
                <div class="" data-aos="fade-up" data-aos-duration="1000">
                <div class="lg:pt-8">
                    <Heading text="Our Mission" color="esiorange"/>
                </div>

                <div class="py-4">
                    Committed to delivering sustainable and resilient solutions that create value for our clients while maintaining the highest standards of quality and integrity.
                    <br>
                    <div class="hidden lg:block py-1"></div>
                    Our mission is the guiding force behind everything we do. We believe that sustainable development is not just a goal, but a responsibility. Every project we embark on is approached with a long-term perspective, ensuring that our solutions are both effective and enduring.
                </div>

                <div class="lg:hidden">
                    <div class="py-2 w-4/12 mx-auto"><img src={leaf} alt="leaf icon"></div>
                    <CTA url="/services" bgcolor="esiorange" text="our services" textcolor="white"/>
                </div>
            </div>
            </div>
        </section>
        

        <section class="py-24 lg:py-16" data-aos="fade-up" data-aos-duration="1000">
            <div class="lg:hidden"><img src={cows} alt="cows drinking from well" class="rounded-3xl"></div>
            <div class="py-4"></div>
            
            <!-- <div class="lg:text-center"><Heading text="More About Us" color="esiorange"/></div> -->
            <h2 class="text-3xl text-left lg:text-5xl lg:text-center text-esiorange font-dmsans font-extrabold">More About Us</h2>
            <div id="separator" class="lg:py-4"></div>
            <div id="holder" class="lg:grid lg:grid-cols-4 lg:gap-x-10">
                <section class="hidden lg:block"><img class="h-full object-cover rounded-4xl" src={meeting} alt="field meeting"></section>
                <section class="col-span-2">
                    <p class="pt-2 pb-6 lg:py-4">ESIWAMA is registered and headquartered in Kampala City, Uganda. Since our establishment in 2023, we have built a reputation for delivering high-quality, innovative, and sustainable solutions across a broad spectrum of sectors.
                        Our journey began with a vision to bridge the gap between sustainable development and practical implementation. Over the years, we have expanded our expertise and service portfolio, positioning ourselves as a trusted advisor and partner in the fields of infrastructure development, environmental management, social and economic consulting, and more.
                    </p>
                    <CTA url="/services" bgcolor="esiorange" text="our services" textcolor="white"/>
                </section>
                <section class="hidden lg:block"><img class="h-full object-cover rounded-4xl" src={cows} alt="cows drinking from well"></section>
            </div>
        </section>

        <!-- CTA -->
        <section class="lg:py-16" data-aos="fade-up" data-aos-duration="1000">
            <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div class=""><img src={ctahandshake} alt="handshake" class="rounded-4xl"></div>
                <div class="mt-2 lg:py-4 text-white bg-esiorange rounded-3xl">
                    <div id="holder" class="py-4 w-10/12 mx-auto">
                        <h3 class="text-2xl lg:text-4xl font-dmsans font-bold">Partner With Us</h3>
                        <!-- <Heading text="Partner With Us"/> -->
                        <h4 class="text-lg lg:py-2">Ready to build a lasting impact?</h4>
                        <p class="py-5 lg:py-8">ESIWAMA is your trusted partner for sustainable solutions that drive progress and create value.</p>
                        <CTA url="/contact" text="get in touch" bgcolor="white" textcolor="esiorange"/>
                    </div>
                </div>
            </div>
        </section>

        <div id="separator" class="py-8"></div>
    </div>
</main>
