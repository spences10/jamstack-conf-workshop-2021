<script>
  import Nav from '$lib/nav.svelte'
import ThemeSwitch from '$lib/theme-switch.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'

  onMount(async () => {
    themeChange(false)
  })
</script>

<Nav/>
<main class="container max-w-xl mx-auto px-4">
  <slot />
</main>
