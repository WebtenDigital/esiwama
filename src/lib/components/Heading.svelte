<script lang="ts">
    let props=$props() //color | text
</script>

<main>
    <h2 class={`text-2xl font-dmsans font-bold text-${props.color} lg:text-4xl`}>{props.text}</h2>
</main>
