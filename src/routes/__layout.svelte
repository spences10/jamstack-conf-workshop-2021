<script context="module">
  export const load = async ({ fetch, page }) => {
    const res = await fetch('/pages.json')
    if (res.ok) {
      const pages = await res.json()
      return {
        props: {
          pages,
          key: page.path,
        },
      }
    }
  }
</script>

<script>
  import Nav from '$lib/nav.svelte'
  import PageTransition from '$lib/page-transition.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })

  export let pages
  export let key
</script>

<Nav {pages} />
<main class="container max-w-xl mx-auto px-4">
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</main>
