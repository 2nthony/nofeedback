<script lang="ts">
  let className: string = undefined;
  export { className as class };
</script>

<button
  {...$$props}
  on:click
  class={`px-4 py-2 bg-sky-500 rounded text-white ${className} hover:bg-sky-400 active:bg-sky-600 disabled:pointer-events-none disabled:opacity-50`}
>
  <slot />
</button>
