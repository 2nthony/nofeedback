<script lang="ts">
  let className: HTMLTextAreaElement["className"] = undefined;
  export { className as class };
  export let value = "";
</script>

<textarea {...$$props} bind:value class={`input ${className}`} />
