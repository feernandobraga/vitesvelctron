<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import electronLogo from './assets/electron.svg'

  const nodeVersion = api.node();
  const chromeVersion = api.chrome();
  const electronVersion = api.electron();

</script>

<style>
  .logo:hover {
    filter: drop-shadow(0 0 2rem #ff00ff); /* Change the shadow color here */
  }
</style>

<main class="min-h-screen bg-gray-900 text-white flex flex-col h-screen">
  <!-- Top Part -->
  <section class="flex justify-center items-center h-2/5 py-8">
    <div class="flex items-center space-x-4 gap-16">
      <img class="logo h-12" src={viteLogo} alt="Company Logo 1" />
      <img class="logo h-12" src={svelteLogo} alt="Company Logo 2" />
      <img class="logo h-12" src={electronLogo} alt="Company Logo 3" />
      <img class="logo h-12" src={viteLogo} alt="Company Logo 4" />
    </div>
  </section>

  <!-- Middle Part -->
  <section class="flex flex-col items-center justify-center h-60vh">
    <h1 class="text-4xl font-bold">Vite + Svelte + Electron + Tailwind</h1>
    <!-- Additional content goes here -->
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 fixed bottom-0 left-0 w-full py-8">
    <div class="container mx-auto text-center">
      <p>Footer</p>
    </div>
  </footer>
</main>


