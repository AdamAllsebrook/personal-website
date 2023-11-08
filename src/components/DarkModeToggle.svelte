<script lang="ts">
  import { Sun } from "lucide-svelte";
  import { Moon } from "lucide-svelte";
  import { onMount } from "svelte";
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
  <div
    class="col-start-1 row-start-1 scale-0 transition-transform duration-300 dark:scale-100"
  >
    <Moon size="24" strokeWidth="1.5" />
  </div>
  <div
    class="col-start-1 row-start-1 scale-100 transition-transform duration-300 dark:scale-0"
  >
    <Sun size="24" strokeWidth="1.5" />
  </div>
</button>
<label for="toggleDarkMode" class="hidden">Toggle Dark Mode</label>
