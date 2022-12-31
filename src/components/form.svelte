<script>
  import Button from "../atoms/button.svelte";
  import Input from "../atoms/input.svelte";
  import Label from "../atoms/label.svelte";
  import Textarea from "../atoms/textarea.svelte";
  import { submitFeedback } from "../core/notion";

  let sending = false;
  let formValue = {
    name: "",
    email: "",
    content: "",
  };

  $: disabled = !(formValue.name && formValue.content);

  async function handleSend() {
    sending = true;

    try {
      await submitFeedback(formValue);
      formValue = {
        name: "",
        email: "",
        content: "",
      };
    } finally {
      sending = false;
    }
  }
</script>

<form class="grid gap-4" on:submit|preventDefault>
  <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2">
    <div class="flex flex-col gap-2">
      <Label required for="name">Name</Label>
      <Input bind:value={formValue.name} class="w-full" name="name" />
    </div>
    <div class="flex flex-col gap-2">
      <Label for="email">Email</Label>
      <Input bind:value={formValue.email} class="w-full" name="email" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <Label required for="content">Content</Label>
    <Textarea bind:value={formValue.content} />
  </div>

  <div>
    <Button {disabled} type="button" on:click={handleSend} class="w-full">
      Send{sending ? "ing" : ""}
    </Button>
  </div>
</form>
