<script lang="ts">
  import clsx from "clsx";
  import { removeScroll } from "@/actions/removeScroll";
  import { focusTrap } from "@/actions/focusTrap";
  import { fly, fade } from "svelte/transition";
  import { constants } from "@/data/constants";
  import { Menu, X } from "lucide-svelte";

  let isOpen = false;
</script>

<div use:focusTrap={isOpen} class="ml-auto md:hidden">
  {#if isOpen}
    <!-- Placeholder to prevent layout shifts -->
    <span aria-hidden="true" class="block size-9" />
  {/if}
  <button
    aria-label="{isOpen ? 'Otevřít' : 'Zavřít'} menu"
    class={clsx(
      "grid place-items-center size-9 rounded-md transition-colors z-20 focus-ring",
      isOpen
        ? "!ring-offset-0 fixed top-3.5 right-4 bg-white"
        : "bg-gray-200/80",
    )}
    on:click={() => {
      if (!isOpen) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      isOpen = !isOpen;
    }}
  >
    <svelte:component
      this={isOpen ? X : Menu}
      aria-label="Menu"
      class="size-6"
    />
  </button>

  {#if isOpen}
    <ul
      use:removeScroll
      transition:fly={{ y: -10, duration: 200 }}
      class="fixed top-16 left-4 right-4 flex flex-col p-2 z-50 rounded-lg bg-white"
    >
      {#each constants.navLinks as item}
        <a
          href={item.href}
          class="px-2.5 py-2 text-sm rounded-md transition-colors focus-ring hover:bg-gray-200"
        >
          {item.name}
        </a>
      {/each}
    </ul>
    <div
      transition:fade={{ duration: 150 }}
      class="fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-10"
    />
  {/if}
</div>
