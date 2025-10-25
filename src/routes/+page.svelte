<script lang="ts">
    import Menu from "$lib/components/Menu.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import CTA from "$lib/components/CTA.svelte";
    import Seo from "$lib/components/Seo.svelte";
    
    import esiwamalogo from "$lib/assets/esiwama-logo-colored.png"
    import heroimg from "$lib/assets/heroimg.webp"
    import leaf from "$lib/assets/leaf.png"
    import ctahandshake from "$lib/assets/cta-handshake.png"
    import business from "$lib/assets/handshake.png"
    import building from "$lib/assets/infrastructure.jpg"
    import lake from "$lib/assets/lake.webp"
    import meeting from "$lib/assets/meeting trees.jpg"
    import water from "$lib/assets/water-correction.jpg"

    const herocards = [
        {
            title: "expertise",
            details: "We bring together seasoned consultants with deep technical knowledge and advisory experience, ensuring solutions that are practical, innovative, and future-ready."
        },
                {
            title: "impact",
            details: "Our work goes beyond infrastructure — we create environments that uplift communities, strengthen social systems, & inclusive development."
        },
                {
            title: "sustainability",
            details: "We prioritize resilience and long-term value, designing solutions that balance economic growth, environmental stewardship, and social well-being."
        }
    ];

    const expertisecards = [
        {
            imgurl: business,
            title: "BUSINESS ADVISORY & PROJECT MANAGEMENT",
            description: "Strategic guidance, staffing, and project execution support to deliver results."
        },
                {
            imgurl: building,
            title: "INFRASTRUCTURE DEVELOPMENT",
            description: "From feasibility studies to design, supervision, and long-term asset management."
        },
                {
            imgurl: lake,
            title: "ENVIRONMENTAL MANAGEMENT",
            description: "Sustainable solutions for impact assessments, compliance, and resource protection."
        },
                {
            imgurl: meeting,
            title: "SOCIAL & ECONOMIC DEVELOPMENT",
            description: "Inclusive strategies that strengthen communities and institutions."
        },
                {
            imgurl: water,
            title: "WATER & LAND USE MANAGEMENT",
            description: "Smart planning for water resources, agriculture, and sustainable land use."
        }
    ]

</script>

<Seo title="Home" description="Engineering Sustainable Solutions, Empowering Communities; we combine advisory insight with technical excellence to plan, design, and deliver solutions that strengthen infrastructure, support communities, and drive sustainable development."/>

<main class="text-gray-600 lg:text-lg">
    <div class="w-11/12 mx-auto pt-8 lg:w-10/12"><Menu logotype="logoblack"/></div>
    
    <div id="page holder" class="w-11/12 mx-auto py-4 lg:w-10/12">

        <!-- hero for lg -->
         <section class="hidden lg:block ">
            <div class="flex py-8 items-center justify-between">
                <div class="w-7/12"><img src={esiwamalogo} alt="esiwama colored logo"></div>
                <p class="py-2 text-3xl text-left text-esiblue font-semibold">Engineering Sustainable Solutions, <br>Empowering Communities</p>
            </div>

            <div id="cards-holder" class="relative">
                <div class=""><img src={heroimg} alt="environment" class="h-[600px] w-full object-cover rounded-4xl shadow-xl lg:shadow-3xl"></div>

                <div class="absolute top-[10%] right-[5%] w-4/12 mx-auto py-8 bg-white rounded-4xl shadow-xl lg:shadow-3xl">
                    <div id="holder" class="w-10/12 mx-auto">
                        <h2 class="text-esiorange text-xl font-semibold ">Who We Are</h2>
                        <p class="pt-4 pb-8">We combine advisory insight with technical excellence to plan, design, and deliver solutions that strengthen infrastructure, support communities, and drive sustainable development.</p>
                        <a href="/about" class="block w-full px-4 py-2 text-white bg-esiblue hover:bg-esiorange rounded-xl uppercase">
                            <div class="flex justify-between items-center">
                                <p class="font-dmsans font-bold">About Us</p>
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="px-[5%] absolute top-3/4 flex items-center justify-between space-x-8">
                    {#each herocards as carditem}
                        <div class="py-8 text-white bg-esiorange rounded-4xl">
                            <div id="holder" class="w-10/12 mx-auto">
                                <h2 class="text-md font-semibold font-outfit uppercase">{carditem.title}</h2>
                                <p class="pt-2">{carditem.details}</p>
                            </div>
                        </div>
                    {/each}
                </div>

            </div>
         </section>

        
         <!-- hero for mobile -->
        <section class="lg:hidden">
            <div class=""><img src={esiwamalogo} alt="esiwama colored logo"></div>
            <div class="">
                <p class="py-2 text-xl text-center text-esiblue font-semibold">Engineering Sustainable Solutions, <br>Empowering Communities</p>
                
                <div id="" class="relative">
                <div class="py-2" data-aos="fade-down" data-aos-duration="1000"><img src={heroimg} alt="environment" class="rounded-4xl shadow-xl lg:shadow-3xl"></div>
                <div class="absolute top-28 inset-x-0 w-11/12 mx-auto py-4 bg-white shadow-lg rounded-4xl">
                    <div id="holder" class="w-10/12 mx-auto">
                        <h2 class="text-esiorange text-lg font-semibold ">Who We Are</h2>
                        <p class="pt-2 pb-4">We combine advisory insight with technical excellence to plan, design, and deliver solutions that strengthen infrastructure, support communities, and drive sustainable development.</p>
                        <a href="/about" class="block w-full px-4 py-2 text-white bg-esiblue rounded-xl uppercase">
                            <div class="flex justify-between items-center">
                                <p class="font-dmsans font-bold">About Us</p>
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- separator -->
         <div class="pt-[45%] md:pt-[15%]"></div>

        <!-- cards for mobile -->
         <div class="lg:hidden">
            {#each herocards as carditem}
                <div class="my-4 py-8 text-white bg-esiorange rounded-4xl shadow-xl lg:shadow-3xl" >
                    <div id="holder" class="w-10/12 mx-auto">
                        <h2 class="text-md font-semibold font-outfit uppercase">{carditem.title}</h2>
                        <p class="pt-2">{carditem.details}</p>
                    </div>
                </div>
            {/each}
         </div>

         <!-- OUR EXPERTISE -->
        <section class="py-12">
            <div class="text-center"><Heading color="esiblue" text="Our Expertise"/></div>
            <p class="pt-4 pb-6 text-center lg:w-6/12 lg:mx-auto">At ESIWAMA, we provide a comprehensive suite of consulting services tailored to the diverse needs of clients across multiple sectors.</p>
          
            <div class="lg:py-4 lg:grid lg:grid-cols-2 lg:gap-x-16">
                {#each expertisecards as carditem}
                    <a href="/services">
                        <div id="card" class="py-5 flex items-start space-x-4 lg:py-8">
                            <div id="cardimage" class="w-5/12 lg:w-6/12"><img src={carditem.imgurl} alt={carditem.title} class="w-full h-36 object-cover rounded-4xl lg:h-40 shadow-xl lg:shadow-3xl"></div>
                            <div class="w-6/12">
                                <div class="flex items-center space-x-2">
                                    <h3 class="text-sm font-bold font-dmsans lg:text-base">{carditem.title}</h3>
                                    <div id="arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4 text-esiorange">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </div>
                                </div>
                                <p class="pt-2">{carditem.description}</p>
                            </div>
                        </div>
                    </a>
                {/each}
                
                <div class="hidden lg:block">
                    <div class="pb-4 pt-10"><img src={leaf} alt="leaf icon" class="h-20"></div>
                <CTA url="/services" text="our services" bgcolor="esiblue"/>
                </div>
            </div>
            
            <div id="separator" class="py-2"></div>
            <a href="/services" class="block w-full px-4 py-2 text-white bg-esiblue rounded-xl uppercase lg:hidden">
                <div class="flex justify-between items-center">
                    <p class="font-dmsans font-bold">Our Services</p>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
            </a>
        </section>

        <!-- CTA -->
         <section class="mt-12 mb-20 py-6 text-white bg-esigreen rounded-4xl">
            <div class="px-10 py-4 lg:flex lg:items-center lg:gap-x-10">
                <div class="lg:w-6/12 lg:mx-auto"><img src={ctahandshake} alt="handshake" class="rounded-4xl lg:h-64 lg:w-full lg:object-cover"></div>
                <div class="lg:w-6/12 lg:mx-auto">
                    <h3 class="pt-6 pb-2 text-2xl lg:text-3xl">Partner With Us</h3>
                    <!-- <Heading text="Partner With Us"/> -->
                    <h4 class="text-lg">Ready to build a lasting impact?</h4>
                    <p class="py-5">ESIWAMA is your trusted partner for sustainable solutions that drive progress and create value.</p>
                    <CTA url="/contact" text="get in touch" bgcolor="white" textcolor="esiorange"/>
                </div>
            </div>
         </section>
    </div>
</main>
