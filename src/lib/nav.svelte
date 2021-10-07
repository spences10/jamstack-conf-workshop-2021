<script>
  import ThemeSwitch from './theme-switch.svelte'
</script>

<div
  class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box sticky top-0 z-10"
>
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold"> Jamstack Conf Blog </span>
  </div>
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
      <a href="/" class="btn btn-ghost btn-sm rounded-btn"> Home </a>
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSwitch />
  </div>
</div>
