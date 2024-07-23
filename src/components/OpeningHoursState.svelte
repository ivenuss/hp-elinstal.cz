<script lang="ts">
  import clsx from "clsx";
  import { config } from "@/data/config";
  import { constants } from "@/data/constants";

  export let href: string | undefined = undefined;
  export let hideLabel = false;

  const checkIsOpenNow = () => {
    const now = new Date(
      // Use the config timezone for opening hours
      new Date().toLocaleString("en", { timeZone: config.timezone }),
    );

    const day = now.getDay();
    const hour = now.getHours();

    const range = constants.openingHoursRanges[day];

    if (!range) {
      return false;
    }

    const [start, end] = range;

    return hour >= start && hour < end;
  };

  $: isOpenNow = checkIsOpenNow();
</script>

<svelte:element
  this={href ? "a" : "span"}
  {href}
  class={clsx(
    "flex items-center gap-x-1.5",
    isOpenNow ? "text-green-500" : "text-red-500",
    { "focus-ring focus-visible:rounded-sm hover:underline": href },
  )}
>
  <span class="relative flex size-2.5">
    <span
      class={clsx(
        "absolute inline-flex h-full w-full rounded-full opacity-75",
        isOpenNow ? "animate-ping bg-green-400" : "bg-red-400",
      )}
    >
    </span>
    <span
      class={clsx(
        "relative inline-flex rounded-full size-2.5",
        isOpenNow ? "bg-green-500" : "bg-red-500",
      )}
    >
    </span>
  </span>
  {#if !hideLabel}
    <span class="text-xs">
      {isOpenNow ? "Otevřeno" : "Zavřeno"}
    </span>
  {/if}
</svelte:element>
