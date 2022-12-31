<script lang="ts">
  let className: HTMLTextAreaElement["className"] = undefined;
  export { className as class };
  export let value = "";
</script>

<textarea
  {...$$props}
  bind:value
  class={`border border-gray-200 hover:border-gray-300 focus:border-gray-400 focus:outline-none p-2 rounded text-sm ${className}`}
/>
