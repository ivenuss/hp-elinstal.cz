<script lang="ts">
  import clsx from "clsx";
  import { Menu, X } from "lucide-svelte";

  export let isOpen: boolean;
  let classes: string | undefined;
  export { classes as class };
</script>

<button
  aria-label="{isOpen ? 'Otevřít' : 'Zavřít'} menu"
  class={clsx(
    "grid place-items-center size-9 rounded-md bg-gray-100 focus-ring",
    { "ring-offset-0!": isOpen },
    classes,
  )}
  on:click={() => {
    if (!isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
  on:click
>
  <svelte:component this={isOpen ? X : Menu} aria-label="Menu" class="size-6" />
</button>
