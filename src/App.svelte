<script>
	import svelteLogo from "./assets/svelte.svg";
	import viteLogo from "/vite.svg";
	import Counter from "./lib/Counter.svelte";
	import electronLogo from "./assets/electron.svg";
	import tailwindLogo from "./assets/tailwind.svg";

	const nodeVersion = api.node();
	const chromeVersion = api.chrome();
	const electronVersion = api.electron();
</script>

<main class="min-h-screen bg-slate-900 text-white flex flex-col">
	<!-- Top Part -->
	<section class="flex justify-center items-center h-48">
		<div class="flex items-center space-x-4 gap-4 md:gap-16 flex-wrap">
			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#ac00ac] transition-all duration-300"
					src={viteLogo}
					alt="Vite logo"
				/>
			</a>

			<a href="https://svelte.dev/" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#ff3e00aa] transition-all duration-300"
					src={svelteLogo}
					alt="Svelte logo"
				/>
			</a>

			<a href="https://www.electronjs.org/" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#237d8f] transition-all duration-300"
					src={electronLogo}
					alt="Electron logo"
				/>
			</a>

			<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
				<img
					class="h-20  hover:drop-shadow-[0_0_2rem_#171bff] transition-all duration-300 rounded-full p-1 bg-gradient-to-tr from-indigo-900 to-cyan-700"
					src={tailwindLogo}
					alt="Tailwind logo"
				/>
			</a>
		</div>
	</section>

	
	<!-- Middle Part -->
	<section class="flex flex-col items-center justify-center mt-6">
		<h1 class="text-4xl font-bold">Vite + Svelte + Electron + Tailwind</h1>
		<p class="mt-6">
			Node version: {nodeVersion} | Chrome version: {chromeVersion} | Electron version:
			{electronVersion}
		</p>
		<div>
			<Counter />
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-gray-950 fixed bottom-0 left-0 w-full py-2">
		<div class="flex justify-between items-center mx-6">
			<p class="flex-auto text-xs font-light">
				If you are feeling generous, please consider buying me a coffee 🧡
			</p>

			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.buymeacoffee.com/feernandobraga"
				class="text-xs flex items-center py-1 px-4 bg-gray-800 hover:bg-indigo-700 text-white
				transition ease-in duration-200 text-center shadow-md focus:outline-none rounded-md"
			>
				Buy me a coffee <span class="ml-3 text-2xl">☕️</span>
			</a>
		</div>
	</footer>
</main>
