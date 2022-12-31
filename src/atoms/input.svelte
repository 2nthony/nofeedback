<script lang="ts">
  let className: HTMLInputElement["className"] = undefined;
  export { className as class };
  export let value = "";
</script>

<input {...$$props} bind:value class={`input ${className}`} />
