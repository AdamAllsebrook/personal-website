<script lang="ts">
  import { Copy, Check } from "lucide-svelte";
  import { scale } from "svelte/transition";

  export let code: string;

  let copied = false;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 1000);
  };
</script>

<button
  on:click={copyCode}
  class="absolute right-0 grid p-4 opacity-0 transition-opacity group-hover:opacity-100"
  style={copied ? "opacity: 1" : ""}
>
  {#if copied}
    <div class="col-start-1 row-start-1" transition:scale={{ duration: 300 }}>
      <Check size="24" class="text-base-200 dark:text-base-800" />
    </div>
  {:else}
    <div class="col-start-1 row-start-1" transition:scale={{ duration: 300 }}>
      <Copy size="24" class="text-base-200 dark:text-base-800" />
    </div>
  {/if}
</button>
