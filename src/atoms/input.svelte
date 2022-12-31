<script lang="ts">
  let className: HTMLInputElement["className"] = undefined;
  export { className as class };
  export let value = "";
</script>

<input
  {...$$props}
  bind:value
  class={`border border-gray-200 hover:border-gray-300 focus:border-gray-400 focus:outline-none p-2 rounded text-sm text-gray-700 ${className}`}
/>
