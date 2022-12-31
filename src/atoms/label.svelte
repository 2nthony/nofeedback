<script lang="ts">
  let forAttr: string = undefined;
  export { forAttr as for };
  export let required = false;
</script>

<label
  {...$$restProps}
  for={forAttr}
  class="text-sm text-gray-700 dark:text-gray-200"
>
  <slot />
  {#if required}
    <span class="text-rose-300">*</span>
  {/if}
</label>
