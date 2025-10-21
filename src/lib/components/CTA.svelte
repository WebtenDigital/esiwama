<script lang="ts">
    let props=$props() //url | bgcolor | text | textcolor
</script>

<div class="">
    <a href={props.url} class={`block w-full px-4 py-3 text-white bg-${props.bgcolor?props.bgcolor:"esiblue"} rounded-xl uppercase ${props.bgcolor=="esiblue"?"hover:bg-esiorange":props.bgcolor=="white"?"text-white bg-esiorange":"hover:bg-esiblue"}`}>
        <div class="flex justify-between items-center">
            <p class={`text-${props.textcolor?props.textcolor:""} font-dmsans font-bold`}>{props.text}</p>
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class={`size-6 text-${props.textcolor}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    </a>
</div>