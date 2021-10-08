<script>
  import ThemeSwitch from './theme-switch.svelte'

  export let pages
</script>

<div
  class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box sticky top-0 z-10"
>
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold"> Jamstack Conf Workshop </span>
  </div>

  <div class="dropdown dropdown-right lg:hidden">
    <div tabindex="0" class="m-1 btn">Links</div>
    <ul
      tabindex="0"
      class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
    >
      <a href="/" class="btn btn-ghost btn-sm rounded-btn"> Home </a>
      {#each pages as { title, slug }}
        <a
          sveltekit:prefetch
          href={`/${slug}`}
          class="rounded-btn btn btn-ghost btn-sm">{title}</a
        >
      {/each}
      <a href="/add-post" class="btn btn-ghost btn-sm rounded-btn">
        Add a Post
      </a>
    </ul>
  </div>
  <div class="mx-2 px-2 hidden navbar-center lg:flex">
    <div class="flex items-stretch">
      <a href="/" class="btn btn-ghost btn-sm rounded-btn"> Home </a>
      {#each pages as { title, slug }}
        <a
          sveltekit:prefetch
          href={`/${slug}`}
          class="rounded-btn btn btn-ghost btn-sm">{title}</a
        >
      {/each}
      <a href="/add-post" class="btn btn-ghost btn-sm rounded-btn">
        Add a Post
      </a>
    </div>
  </div>

  <div class="navbar-end">
    <ThemeSwitch />
  </div>
</div>
