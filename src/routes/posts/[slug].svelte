<script context="module">
  export const load = async ({ fetch, page: { params } }) => {
    const { slug } = params
    const res = await fetch(`/posts/${slug}.json`)
    if (res.ok) {
      const post = await res.json()
      return {
        props: post,
      }
    }
  }
</script>

<script>
  import { marked } from 'marked'

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

{#if post.coverImage?.url}
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-lg"
      src={post.coverImage.url}
      alt={`Cover Image for ${post.title}`}
    />
  </div>
{:else}
  <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
    <img
      class="rounded-xl"
      src={`/default-cover-image.jpg`}
      alt={`Default Cover Image`}
    />
  </div>
{/if}

<h1 class="text-4xl font-semibold mb-5">{post.title}</h1>

<a href={'/'} class="inline-flex items-center mb-3">
  <img
    src={post.author?.picture.url
      ? post.author?.picture.url
      : `/default-profile-pic.png`}
    alt={post.author?.name}
    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
  />
  <span class="flex-grow flex flex-col pl-4">
    <span class="title-font font-medium"
      >{post.author?.name ? post.author.name : `anon`}</span
    >
    {#if post.author?.authorTitle}
      <span
        class="text-secondary text-xs tracking-widest font-semibold"
        >{post.author?.authorTitle}</span
      >
    {/if}
  </span>
</a>

<p class="mb-5 flex justify-between">
  {new Date(post.date).toDateString()}
</p>

<div class="mb-5 flex justify-between">
  <div>
    {#if post.tags}
      {#each post.tags as tag}
        <span class="badge badge-primary mr-2">{tag}</span>
      {/each}
    {/if}
  </div>
</div>

<article class="prose">
  {@html marked(post.markdownContent)}
</article>
