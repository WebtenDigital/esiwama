<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import business from "$lib/assets/handshake.png"
    import tractor from "$lib/assets/armpass-uganda4.jpg"
    import environment from "$lib/assets/environment.png"
    import economic from "$lib/assets/meeting trees.jpg"
    import water from "$lib/assets/water.webp"
    import leaf from "$lib/assets/leaf.png"
    import ctahandshake from "$lib/assets/cta-handshake.png"


    import CTA from "$lib/components/CTA.svelte";
    import Seo from "$lib/components/Seo.svelte";

    const services=[
        {
            title: "Business Support Advisory & Project Management",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.23 15.5C5.429 15.5 1.863 14.279 0 12.903V22h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449M14 18.032C14 19.119 13.104 20 12 20s-2-.881-2-1.968V17h4zM0 9.491V7h24v2.605c0 5.289-24 5.133-24-.114M9 2a2 2 0 0 0-2 2v2h2V4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V6h2V4a2 2 0 0 0-2-2z"/></svg>`,
            description: "We help organizations navigate complexity and achieve results through seamless business support and project management services.",
            imageurl: business,
            details: ["Business Support & Advisory", "Human Resource Services & Staffing", "Project Management & Technical Assistance", "Data Collection, Monitoring & Evaluation", "Tax & Immigration Advisory", "Tender Preparation & Bid Services", "Programme Planning & Financial Management", "Staff Training & Capacity Building"],
            extra: "icon" 
        },
        {
            title: "Infrastructure Development Consultancy",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M12 2h9l3 3v2h-5v5h1v3.396c-1.66.085-2.782.652-3 1.604-.131.574.145 1.553 1.12 1.699.665.1 1.325-.24 1.657-.825.335-.661 1.201-.158.932.45C20.28 19.347 19.183 20 18 20a3.001 3.001 0 0 1-1-5.829V12h1V7h-6v17H6V7H5v2H0V2h6V0h6zm-2 18.052-2 .952V22h2zm-2-1.821v1.773l2-.952v-1.774zm0-2.859v1.859l2-.953V14.42zm0-2.785v1.785l2-.952v-1.785zm0-2.768v1.768l2-.952V8.867zM10 7H8v1.819l2-.952zm10.017-3H2v3h1V5h18zM10 1H8v1h2z"/></svg>`,
            description: "We deliver end-to-end infrastructure solutions, from concept to completion, ensuring technical excellence and long-term value.",
            imageurl: tractor,
            details: ["Architecture", "Surveying & Land Mapping", "Hydrology & Geotechnical Studies", "Operation & Maintenance Support", "Traffic Impact Assessments", "Occupational Health & Safety", "Detailed Design & Supervision"],
            extra: "icon" 
        },
        {
            title: "Environmental & Natural Resource Management",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M1 15c4.075-1.121 9.51.505 11 6 1.985-5.939 7.953-7.051 11-6-2.467 1.524-3.497 9-11 9s-8.487-7.471-11-9M9.203 2.919A2.935 2.935 0 0 1 12.136 0a2.935 2.935 0 0 1 2.934 2.919A2.936 2.936 0 0 1 19.065 4a2.935 2.935 0 0 1-1.062 4 2.935 2.935 0 0 1 1.062 4 2.936 2.936 0 0 1-3.995 1.081A2.935 2.935 0 0 1 12.136 16a2.935 2.935 0 0 1-2.933-2.919A2.936 2.936 0 0 1 5.208 12 2.935 2.935 0 0 1 6.27 8a2.935 2.935 0 0 1-1.062-4 2.936 2.936 0 0 1 3.995-1.081M12 5.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5"/></svg>`,
            description: "We protect ecosystems while enabling development through sustainable resource management practices.",
            imageurl: environment,
            details: ["Environmental & Social Impact Assessments (ESIA)", "Management Plans & Frameworks", "Risk Assessments & Compliance Audits", "Biodiversity & Ecosystem Studies", "Climate Change Strategies", "Life Cycle Assessments & Waste Management"],
            extra: "icon" 
        },
        {
            title: "Economic & Social Development Consulting",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7H3v11H2V6h20zm-2-2H1v11H0V4h20zm-6 6a3.001 3.001 0 0 0 0 6 3.001 3.001 0 0 0 0-6m.15 4.484v.315h-.3V15.5a2.06 2.06 0 0 1-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.217.006.461.043.732.126l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063 0 .516-.404.791-.901.86M4 8v12h20V8zm18 8.018c-.959.42-1.395 1.022-1.814 1.982H7.814c-.419-.959-.855-1.562-1.814-1.982v-4.036c.959-.42 1.395-1.022 1.814-1.982h12.371c.42.959.855 1.562 1.814 1.982z"/></svg>`,
            description: "We strengthen communities and institutions for inclusive, sustainable growth.",
            imageurl: economic,
            details: ["Feasibility Studies & Baseline Research", "Resettlement & Livelihood Restoration", "Public & Stakeholder Engagement", "Socio-Economic Surveys", "Grant Management & Development Financing", "Policy & Institutional Development"],
            extra: "icon" 
        },
        {
            title: "Water Resources, Land Use & Agriculture",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.001 13.375v-3.213c0-.77.481-1.162.992-1.162.506 0 1.007.383 1.007 1.163v4.086c0 .796-.072 1.179-.574 2.092-.793 1.441-2.24 3.807-2.24 6.66h-5.003s-.559-1.759-.763-2.942c-.411-2.377.126-3.471 1.109-4.485 1.022-1.053 1.528-1.551 1.996-2.035 1.081-1.121 2.552.194 1.694 1.222-.468.561-1.624 1.803-1.901 2.171-.268.356.231.857.624.447.573-.599 1.905-2.083 2.365-2.618.443-.517.694-.829.694-1.386m-16.002 0v-3.213C3.999 9.392 3.521 9 3.01 9c-.505 0-1.009.383-1.009 1.163v4.086c0 .796.072 1.179.574 2.092.793 1.441 2.242 3.461 2.242 6.66H9.82s.559-1.759.763-2.942c.411-2.377-.126-3.471-1.109-4.485-1.022-1.053-1.528-1.551-1.996-2.035-1.081-1.121-2.552.194-1.694 1.222.468.561 1.624 1.803 1.901 2.171.268.356-.231.857-.624.447a101 101 0 0 1-2.365-2.618c-.443-.517-.697-.829-.697-1.386M12 1C9.564 4.599 8 6.85 8 9.037 8 11.227 9.789 13 12 13s4-1.773 4-3.963C16 6.85 14.436 4.599 12 1m-.014 2.56c.235.362.514.994.514 1.66 0 1.954-2 2.274-2 1.085 0-.817.994-2.022 1.486-2.745"/></svg>`,
            description: "We apply integrated approaches to water, land, and agricultural development for resilient livelihoods.",
            imageurl: water,
            details: ["Water Resource Assessment", "Catchment & Source Protection", "Wastewater Solutions", "Urban & Physical Planning", "Livestock & Rangeland Management"],
            extra: "icon" 
        }
    ]
</script>

<Seo title="Our Services" description="At ESIWAMA, we provide a comprehensive suite of consulting services tailored to the diverse needs of clients across multiple sectors."/>

<main class="text-gray-600 lg:text-lg">
    <div id="page holder" class="w-11/12 mx-auto lg:w-10/12">
        <Hero text="Services"/>
        <p class="lg:w-10/12 mx-auto">At ESIWAMA, we provide a comprehensive suite of consulting services tailored to the diverse needs of clients across multiple sectors. Our multidisciplinary team integrates business advisory, infrastructure development, environmental management, and socio-economic expertise to deliver solutions that are practical, sustainable, and impactful.</p>
        
        <section class="py-10 lg:hidden">
            {#each services as serviceitem}
            <div class="grid grid-cols-4 gap-x-8 py-8" data-aos="fade-up" data-aos-duration="1000">
                <div id="icon" class="h-16 w-16 fill-esigreen" bind:innerHTML={serviceitem.icon} contenteditable="false"></div>
                
                <div class="col-span-3">
                    <h2 class="font-bold">{serviceitem.title}</h2>
                    <p class="py-2">{serviceitem.description}</p>
                    <div class="py-4"><img src={serviceitem.imageurl} alt={serviceitem.title} class="h-36 w-full rounded-2xl shadow-xl lg:shadow-2xl"></div>
                    <div class="bg-esigreen text-white text-sm rounded-3xl shadow-xl lg:shadow-4xl">
                        <div class="w-10/12 mx-auto py-4">
                            <h3 class="font-semibold">OVERVIEW</h3>
                            <div class="">
                                {#each serviceitem.details as detail}
                                    <p class="py-2">{detail}</p>
                                {/each}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/each}
        </section>

        <!-- for lg -->
        <section class="hidden lg:block py-20">
            {#each services as serviceitem}
                <div class="py-8 grid grid-cols-4 gap-x-4" data-aos="fade-up" data-aos-duration="1000">
                    <div class=" ">
                        <div class="flex items-start justify-between space-x-4">
                            <div id="icon" class="h-20 w-20 fill-esigreen" bind:innerHTML={serviceitem.icon} contenteditable="false"></div>
                            <!-- <div class="" bind:innerHTML={serviceitem.icon} contenteditable="false"></div> -->
                            <h3 class="text-esigreen font-semibold">{serviceitem.title}</h3>
                        </div>
                        <p class="py-4">{serviceitem.description}</p>
                        {#if serviceitem.extra=="icon"}
                            <div class="pt-4"><img src={leaf} alt="leaf icon" class="h-20"></div>
                            {:else if serviceitem.extra=="cta"}
                            <div class="pt-4"><CTA url="/contact" text="get in touch" bgcolor="esiorange" textcolor="white"/></div>
                        {/if}
                    </div>
                    
                    <div class=""><img src={serviceitem.imageurl} alt={serviceitem.title} class="h-full object-cover rounded-4xl shadow-xl lg:shadow-4xl"></div>
                    
                    <div id="details" class="col-span-2 py-8 text-white bg-esigreen rounded-4xl shadow-lg lg:shadow-4xl">
                        <p class="w-10/12 mx-auto font-semibold">OVERVIEW</p>
                        <div class="w-10/12 mx-auto grid grid-cols-2 gap-x-8">
                            {#each serviceitem.details as detail}
                                <p class="py-2">{detail}</p>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </section>
    </div>
    
    <!-- CTA -->
    <section class="bg-esigreen text-white">
        <div id="holder" class="w-10/12 mx-auto py-8 lg:grid lg:grid-cols-2 lg:gap-x-20">
            <div class=""><img src={ctahandshake} alt="handshake" class="rounded-4xl"></div>
            
            <div id="lg-right" class="lg:w-10/12">
                <div class="py-2"></div>
                <h3 class="text-2xl lg:text-4xl font-dmsans font-bold">Partner With Us</h3>
                <!-- <Heading text="Partner With Us"/> -->
                <h4 class="text-lg lg:py-2">Ready to build a lasting impact?</h4>
                <p class="py-5 lg:py-8">ESIWAMA is your trusted partner for sustainable solutions that drive progress and create value.</p>
                <CTA url="/contact" text="get in touch" bgcolor="esiorange" textcolor="white"/>
            </div>
        </div>

    </section>
    </main>
