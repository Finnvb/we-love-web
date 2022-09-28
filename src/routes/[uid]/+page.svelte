<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";

    // console.log(data)

	import Header from "$lib/components/Header.svelte";
	// import Footer from "$lib/components/Footer.svelte";
	// import { text } from "svelte/internal";
</script>

<!-- <Header  /> -->

<main>
	<section class="detailcard">
		<div class="image-container">
			<h2>{@html prismicH.asHTML(data.name)}</h2>
			<!-- <img src="/assets/images/{data.uid}.jpg" alt="profilephoto" /> -->
		</div>
        </section>
        </main>