<script lang="ts">
    export let src: string;
    export let alt: string;

    $: darkSrc = src.replace(/(\.[\w\d_-]+)$/i, "-dark$1");
    $: lightSrc = src.replace(/(\.[\w\d_-]+)$/i, "-light$1");
</script>

<div>
    <img
        class="hidden dark:block"
        src={darkSrc}
        alt={`${alt} (dark mode friendly)`}
    />
    <img
        class="dark:hidden"
        src={lightSrc}
        alt={`${alt} (light mode friendly)`}
    />
</div>
