<script>
  import Button from "../atoms/button.svelte";
  import Input from "../atoms/input.svelte";
  import Label from "../atoms/label.svelte";
  import Textarea from "../atoms/textarea.svelte";

  let sent = false;
  let sending = false;
  let formValue = {
    name: "",
    email: "",
    content: "",
  };

  $: disabled = sending || !(formValue.name && formValue.content);

  async function handleSend() {
    sending = true;

    try {
      await fetch("/api/send", {
        body: JSON.stringify(formValue),
      });
      formValue = {
        name: "",
        email: "",
        content: "",
      };
      sent = true;
    } finally {
      sending = false;
    }
  }

  function handleBackToForm() {
    sent = false;
  }
</script>

{#if !sent}
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
{:else}
  <div class="flex flex-col gap-4">
    <div>
      <h4 class="text-gray-500 text-2xl font-medium">
        Your feedback has been sent!
      </h4>
      <p class="text-gray-500 mt-2">
        We received your feedback. Thank you for your time and have a nice day!
      </p>
    </div>
    <div>
      <Button on:click={handleBackToForm}>Go back</Button>
    </div>
  </div>
{/if}
