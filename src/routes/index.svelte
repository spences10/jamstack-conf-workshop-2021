<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/posts.json')
    if (res.ok) {
      const posts = await res.json()
      return {
        props: posts,
      }
    }
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Welcome!</title>
</svelte:head>

<ul>
  {#each posts as post}
    <li class="card text-center shadow-2xl mb-20">
      <figure class="px-10 pt-10">
        {#if post.coverImage?.url}
          <img
            class="rounded-xl"
            src={post.coverImage.url}
            alt={`Cover image for ${post.title}`}
          />
        {:else}
          <img
            class="rounded-xl"
            src={`/default-cover-image.jpg`}
            alt={`Default Cover Image`}
          />
        {/if}
      </figure>
      <div class="card-body">
        <h2 class="title font-bold text-2xl mb-2">{post.title}</h2>
        <p class="mb-2">{post.excerpt}</p>
        <div>
          {#if post.tags}
            {#each post.tags as tag}
              <span class="badge badge-primary space-x-1 mr-2"
                >{tag}</span
              >
            {/each}
          {/if}
        </div>
        <div class="flex justify-center card-actions">
          <a
            sveltekit:prefetch
            class="btn btn-outline btn-primary"
            href={`/posts/${post.slug}`}>Read &rArr;</a
          >
        </div>
      </div>
    </li>
  {/each}
</ul>
