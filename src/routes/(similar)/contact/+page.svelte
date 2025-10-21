<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";

    import businessman from "$lib/assets/guyonphone.jpg"
    import businesswoman from "$lib/assets/contact woman - edited.png"
    import businesswomanfull from "$lib/assets/contact woman - orig.png"
    import texting from "$lib/assets/texting.png"

    import { PUBLIC_WHATSAPPNUMBER } from '$env/static/public';

    const whatsappnumber = PUBLIC_WHATSAPPNUMBER;

</script>

<main class="text-gray-600 lg:text-lg">
    <div id="page holder" class="w-11/12 mx-auto pb-20 lg:w-10/12">
        <Hero text="Contact Us"/>

        <p class="lg:text-center">Ready to build lasting impact? ESIWAMA is your trusted partner for sustainable solutions that drive progress and create value.</p>

        <!-- Contacts -->
        <div class="relative w-10/12 my-8 py-8 text-white bg-esiblue rounded-4xl lg:w-8/12 lg:py-12 shadow-xl" data-aos="fade-up" data-aos-duration="1000">
            <div class="w-10/12 mx-auto">
                <p class="pb-4 lg:font-semibold lg:text-3xl">Get in touch with us</p>
                <div class="lg:py-4"></div>
                <div id="location" class="">
                    <h4>LOCATION</h4>
                    <p>Arriva House, Plot 715 Bombo Road - Makerere Kavule, P.O Box 130229, Kampala, Uganda</p>
                </div>
                <div id="contacts" class="py-4 lg:py-8">
                    <h4>CONTACTS</h4>
                    <p>+256 394-500-842</p>
                    <p>+256 782-383-300</p>
                </div>
                <div id="email" class="">
                    <h4>EMAIL</h4>
                    <p class="text-base lg:text-lg">info@esiwamagroup.com</p>
                    <p>esiwama@gmail.com</p>
                </div>
            </div>

            <div class="absolute -right-[20%] -bottom-[12%] lg:-right-[38%]"><img src={businessman} alt="man on phone" class="h-[250px] rounded-4xl lg:h-[400px] lg:w-[400px] object-cover shadow-xl lg:shadow-2xl"></div>
        </div>
        
        <div class="py-8 lg:py-0"></div>

        <!-- WhatsApp -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:my-40" data-aos="fade-up" data-aos-duration="1000">
            <div class="hidden lg:block"><img src={texting} alt="man texting" class="h-80 w-full object-cover rounded-4xl"></div>

            <section class="text-white">
                <div class="py-1 bg-esiblue rounded-[32px] lg:py-2 shadow-xl">
                    <div class="py-8 w-10/12 mx-auto grid grid-cols-2 gap-x-2 items-center lg:py-20">
                        <p class="">Send a mesage on</p>
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131 31"><path fill="#25d366" d="M49.066 17.928h-.039l-2.465-9.951h-2.97l-2.517 9.83h-.04l-2.278-9.824h-3.166l3.82 14.433h3.212l2.404-9.824h.04l2.446 9.824h3.153L54.54 7.983h-3.112zm15.153-5.063a2.8 2.8 0 0 0-1.161-.87 4.9 4.9 0 0 0-1.89-.312 3.76 3.76 0 0 0-1.658.415 3.3 3.3 0 0 0-1.397 1.323h-.06V7.983h-2.865v14.433h2.865v-5.478q0-1.598.525-2.295.525-.699 1.698-.697 1.03 0 1.434.638.403.637.404 1.93v5.902h2.865v-6.428a8.5 8.5 0 0 0-.172-1.769 3.36 3.36 0 0 0-.588-1.354m11.821 7.224v-5.428q0-.952-.424-1.528a2.9 2.9 0 0 0-1.09-.904 4.9 4.9 0 0 0-1.476-.433q-.794-.11-1.597-.112c-.58 0-1.16.057-1.73.17a4.9 4.9 0 0 0-1.546.577 3.4 3.4 0 0 0-1.131 1.07 3.33 3.33 0 0 0-.507 1.679h2.865q.082-.851.567-1.207c.323-.235.775-.368 1.342-.368q.361 0 .716.05c.207.028.407.096.587.202.17.103.31.25.404.425.111.23.163.483.15.738a.78.78 0 0 1-.262.677 1.9 1.9 0 0 1-.772.351q-.548.133-1.11.183-.63.061-1.273.16-.65.103-1.284.275a3.6 3.6 0 0 0-1.132.514c-.338.24-.615.555-.81.92a3.06 3.06 0 0 0-.312 1.466c-.012.48.08.955.273 1.395.17.378.43.711.754.97.335.263.72.455 1.13.566.455.125.924.186 1.395.183.644 0 1.284-.095 1.899-.282a3.76 3.76 0 0 0 1.618-.993 4 4 0 0 0 .202 1.01h2.91a2.45 2.45 0 0 1-.284-.969q-.078-.676-.072-1.357m-2.865-1.719q-.005.326-.05.647c-.037.282-.13.553-.272.8a1.9 1.9 0 0 1-.688.676q-.463.285-1.313.284-.337 0-.667-.062a1.6 1.6 0 0 1-.565-.213 1.1 1.1 0 0 1-.385-.413c-.1-.2-.148-.423-.141-.647-.009-.23.04-.46.141-.668a1.3 1.3 0 0 1 .374-.434q.25-.18.546-.273.314-.1.636-.161c.23-.04.453-.076.686-.101q.35-.04.658-.101.297-.057.586-.151c.167-.052.321-.137.453-.252zM81.4 8.83h-2.864v3.135H76.79v1.92h1.737v6.166c-.02.44.07.877.262 1.273.163.314.412.575.718.754.326.183.684.303 1.055.353q.628.092 1.262.09c.285 0 .573 0 .87-.02q.407-.015.808-.08v-2.23q-.21.044-.425.062c-.15.014-.301.021-.464.021q-.726 0-.971-.244-.243-.241-.242-.97v-5.174h2.102v-1.921h-2.106zm11.863 9.005a2.6 2.6 0 0 0-.754-.83c-.324-.229-.68-.41-1.056-.536a13 13 0 0 0-1.223-.343c-.417-.095-.8-.182-1.19-.262a9 9 0 0 1-1.043-.273 2.2 2.2 0 0 1-.736-.395.78.78 0 0 1-.283-.626.77.77 0 0 1 .157-.512c.106-.13.241-.234.395-.302a1.8 1.8 0 0 1 .514-.131q.263-.023.528-.02c.462-.011.92.089 1.336.293q.564.291.624 1.122h2.73c-.03-.57-.2-1.122-.497-1.61a3.24 3.24 0 0 0-1.04-1.018 4.3 4.3 0 0 0-1.425-.546 8.2 8.2 0 0 0-1.645-.162 9 9 0 0 0-1.659.151 4.6 4.6 0 0 0-1.455.526 2.9 2.9 0 0 0-1.04 1.02 3.15 3.15 0 0 0-.394 1.658c-.013.406.085.808.284 1.163.188.316.446.586.753.788.327.217.682.387 1.056.506q.596.193 1.221.333 1.222.236 2.396.648.86.322.86.97c.009.226-.055.449-.183.636-.119.166-.273.304-.452.404a2.2 2.2 0 0 1-.603.222 3 3 0 0 1-.636.072q-.415 0-.818-.1a2.2 2.2 0 0 1-.698-.315 1.7 1.7 0 0 1-.496-.545 1.6 1.6 0 0 1-.191-.8H83.86c.003.615.167 1.218.475 1.75.28.454.66.838 1.112 1.121.475.292 1 .496 1.547.604a8.893 8.893 0 0 0 3.525.01 4.4 4.4 0 0 0 1.526-.603 3.17 3.17 0 0 0 1.494-2.85 2.4 2.4 0 0 0-.282-1.215zM98.96 7.98l-5.456 14.433h3.193l1.132-3.214h5.395l1.09 3.214h3.296l-5.399-14.43zm-.302 8.854 1.881-5.296h.039l1.82 5.296zm18.863-3.453a4.35 4.35 0 0 0-1.476-1.234 4.5 4.5 0 0 0-2.12-.464 4.1 4.1 0 0 0-1.779.383 3.15 3.15 0 0 0-1.327 1.238h-.041v-1.34h-2.729v14.111h2.865v-4.952h.039c.337.5.801.902 1.345 1.162.559.265 1.17.4 1.788.395a4.3 4.3 0 0 0 2.01-.453 4.3 4.3 0 0 0 1.436-1.194 5.1 5.1 0 0 0 .859-1.718 7.2 7.2 0 0 0 .282-2.02 8 8 0 0 0-.282-2.134 5.2 5.2 0 0 0-.87-1.78m-1.838 5.073a3.1 3.1 0 0 1-.414 1.056 2.435 2.435 0 0 1-3.123.739 2.26 2.26 0 0 1-.778-.739 3.2 3.2 0 0 1-.424-1.056 5.7 5.7 0 0 1-.131-1.231 6.5 6.5 0 0 1 .119-1.255c.073-.38.214-.743.416-1.072.194-.308.457-.566.768-.754.358-.21.767-.314 1.182-.301.408-.011.81.093 1.161.301.315.193.581.455.778.768.208.331.355.697.434 1.08q.134.61.131 1.236.004.62-.113 1.229zm14.145-3.285a5.2 5.2 0 0 0-.87-1.788 4.35 4.35 0 0 0-1.474-1.234 4.5 4.5 0 0 0-2.122-.464 4.1 4.1 0 0 0-1.778.383 3.16 3.16 0 0 0-1.328 1.238h-.039v-1.34h-2.735v14.111h2.864v-4.952h.041c.336.5.8.901 1.344 1.162.558.265 1.17.4 1.788.395a4.3 4.3 0 0 0 2.011-.453 4.25 4.25 0 0 0 1.434-1.194 5.1 5.1 0 0 0 .86-1.718c.19-.656.285-1.336.283-2.02a8 8 0 0 0-.273-2.126zm-2.714 3.285c-.07.375-.211.733-.414 1.056a2.33 2.33 0 0 1-3.901 0 3.2 3.2 0 0 1-.424-1.056 6 6 0 0 1-.131-1.231 6.4 6.4 0 0 1 .121-1.255c.078-.38.225-.744.434-1.072a2.36 2.36 0 0 1 .767-.754c.358-.21.768-.314 1.182-.301.408-.012.811.093 1.161.301.316.193.583.455.78.768.208.331.355.697.434 1.08q.134.61.131 1.236a6.3 6.3 0 0 1-.128 1.229zM30.314 14.801A14.87 14.87 0 0 0 15.544.477h-.072a14.87 14.87 0 0 0-13.06 22.002l-1.314 7.868a.114.114 0 0 0 .113.13h.023l7.782-1.731a14.9 14.9 0 0 0 6.443 1.465h.425a14.864 14.864 0 0 0 14.43-15.41M15.81 27.625h-.351a12.3 12.3 0 0 1-5.665-1.375l-.398-.208-5.278 1.247.974-5.34-.226-.382A12.29 12.29 0 0 1 15.119 3.06h.358a12.287 12.287 0 0 1 .346 24.569z"/><path fill="#25d366" d="M10.29 8.167a1.37 1.37 0 0 0-.978.435c-.354.364-1.345 1.238-1.402 3.075-.057 1.836 1.226 3.653 1.405 3.908s2.454 4.222 6.2 5.831c2.2.948 3.166 1.111 3.791 1.111.258 0 .453-.027.656-.039.686-.042 2.235-.835 2.573-1.698.337-.862.36-1.616.271-1.767s-.333-.26-.701-.452c-.368-.193-2.173-1.158-2.512-1.294a1.2 1.2 0 0 0-.4-.104.55.55 0 0 0-.445.265c-.301.376-.993 1.192-1.226 1.427a.55.55 0 0 1-.407.19 1 1 0 0 1-.408-.11 9.5 9.5 0 0 1-2.939-1.96 11.3 11.3 0 0 1-1.996-2.656c-.205-.38 0-.576.187-.754s.387-.423.58-.636q.239-.274.392-.603a.69.69 0 0 0-.01-.655c-.09-.19-.754-2.058-1.066-2.807-.254-.641-.555-.662-.82-.682-.216-.015-.465-.022-.714-.03h-.032"/></svg>
                        </div>
                    </div>

                    <a href={`https://wa.me/${whatsappnumber}`} aria-label="true" target="_blank" class="flex justify-between mx-2 px-4 py-5 bg-white text-[#25d366] rounded-[24px] lg:py-8 lg:px-8">
                        <p>Send Message</p>
                        <div class="block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-6 text-[#25d366]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <!-- Send Email -->
        <section class="relative pt-24 lg:pt-0 lg:flex" data-aos="fade-up" data-aos-duration="1000">
            
            <div class="lg:hidden"><img src={businesswoman} alt="woman with turban" class="-my-4 w-full h-40 object-cover rounded-4xl"></div>
            
            <div class="hidden lg:block absolute top-[10%] left-[2%]"><img src={businesswomanfull} alt="woman with turban" class="object-cover rounded-4xl shadow-xl lg:shadow-2xl"></div>

            <div class="lg:w-3/12"></div>
            <div class="py-4 bg-esiblue text-white rounded-4xl lg:w-9/12 lg:grid lg:grid-cols-3 lg:py-12 shadow-xl lg:shadow-2xl">
                <div class=""></div>
                <div class="w-11/12 mx-auto lg:col-span-2 lg:w-10/12">
                    <p class="px-2 py-6">Send us an email</p>
                    <div class="py-1"></div>
                    <form method="POST" class="">
                        <input name="email" type="text" placeholder="Enter Your Email" class="w-full px-4 py-4 text-gray-700 placeholder:text-gray-400 bg-white rounded-2xl focus:outline-none"/>
                        <div class="py-4"></div>
                        <textarea name="message" id="" rows="10" placeholder="Type your message here..." class="w-full pt-8 px-4 text-gray-700 bg-white rounded-4xl focus:outline-none"></textarea>
                        <div class="py-2"></div>
                        <button type="submit" class="block w-full py-3 bg-white text-esiblue text-center uppercase rounded-2xl cursor-pointer">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </div>

    <div class="lg:py-20"></div>
</main>
