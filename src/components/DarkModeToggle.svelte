<script lang="ts">
  import { Sun } from "lucide-svelte";
  import { Moon } from "lucide-svelte";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { darkMode } from "../stores";

  let htmlRoot: HTMLElement | null;

  onMount(() => {
    htmlRoot = document.querySelector("html");
  });

  const setDarkMode = (value: boolean) => {
    if (htmlRoot) {
      htmlRoot.classList.toggle("dark", value);
    }
  };

  const toggleDarkMode = () => {
    $darkMode = !$darkMode;
    setDarkMode($darkMode);
  };
</script>

<button class="grid" name="toggleDarkMode" on:click={() => toggleDarkMode()}>
  {#if $darkMode === true}
    <div class="col-start-1 row-start-1" transition:scale={{ duration: 300 }}>
      <Moon size="24" strokeWidth="1.5" />
    </div>
  {:else if $darkMode === false}
    <div class="col-start-1 row-start-1" transition:scale={{ duration: 300 }}>
      <Sun size="24" strokeWidth="1.5" />
    </div>
  {:else}
    <div class="opacity-0">
      <Moon size="24" strokeWidth="1.5" />
    </div>
  {/if}
</button>
<label for="toggleDarkMode" class="hidden">Toggle Dark Mode</label>
