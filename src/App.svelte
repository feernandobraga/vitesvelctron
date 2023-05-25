<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import electronLogo from './assets/electron.svg'
  import tailwindLogo from './assets/tailwind.svg'

  const nodeVersion = api.node();
  const chromeVersion = api.chrome();
  const electronVersion = api.electron();

</script>

<main class="min-h-screen bg-slate-900 text-white flex flex-col h-screen">
  <!-- Top Part -->
  <section class="flex justify-center items-center h-48">
    <div class="flex items-center space-x-4 gap-16">
      <img class="h-20 hover:drop-shadow-[0_0_2rem_#ac00ac] transition-all duration-300" src={viteLogo} alt="Company Logo 1" />
      <img class="h-20 hover:drop-shadow-[0_0_2rem_#ff3e00aa] transition-all duration-300" src={svelteLogo} alt="Company Logo 2" />
      <img class="h-20 hover:drop-shadow-[0_0_2rem_#237d8f] transition-all duration-300" src={electronLogo} alt="Company Logo 3" />
      <img class="h-20 hover:drop-shadow-[0_0_2rem_#a45ff9] transition-all duration-300 rounded-full p-1
       bg-gradient-to-tr from-indigo-900 to-cyan-700" src={tailwindLogo} alt="Company Logo 4" />
    </div>
  </section>
  


  <!-- Middle Part -->
  <section class="flex flex-col items-center justify-center mt-4">
    <h1 class="text-4xl font-bold">Vite + Svelte + Electron + Tailwind</h1>
    <!-- Additional content goes here -->
    <p class="mt-6">Node version: {nodeVersion} | Chrome version: {chromeVersion} | Electron version: {electronVersion}</p>
    <div>
        <Counter/>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 fixed bottom-0 left-0 w-full py-8">
    <div class="container mx-auto text-center">
      <p>Footer</p>
    </div>
  </footer>
</main>


