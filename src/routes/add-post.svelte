<script>
  // form variables
  const initial = {
    title: '',
    excerpt: '',
    markdownContent: '',
    tags: [],
  }

  // this is another trick to clone an object in JavaScript
  let values = JSON.parse(JSON.stringify(initial))

  // reset for form
  const reset = () => (values = JSON.parse(JSON.stringify(initial)))

  const submit = async () => {
    const res = await fetch('/posts/post.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    if (res.ok) {
      reset()
    }
  }
</script>

<svelte:head>
  <title>Add a post!</title>
</svelte:head>

<form on:submit|preventDefault={submit}>
  <div class="form-control mb-5">
    <label for="title" class="label">
      <span class="label-text">Title</span>
    </label>
    <input
      class="input input-bordered"
      type="text"
      name="title"
      placeholder="Title"
      bind:value={values.title}
    />
    <label for="excerpt" class="label">
      <span class="label-text">Excerpt</span>
    </label>
    <input
      class="input input-bordered"
      type="text"
      name="excerpt"
      placeholder="Excerpt"
      bind:value={values.excerpt}
    />
    <label for="content" class="label">
      <span class="label-text">Post Content</span>
    </label>
    <textarea
      class="textarea h-48 textarea-bordered"
      type="text"
      name="content"
      placeholder="Post Content"
      bind:value={values.markdownContent}
    />
    <label for="tags" class="label">
      <span class="label-text">Tags, comma seperated</span>
    </label>
    <input
      class="input input-bordered"
      type="text"
      name="tags"
      placeholder="Tags"
      bind:value={values.tags}
    />
  </div>

  <div>
    <button type="submit" class="btn">Submit</button>
  </div>
</form>
