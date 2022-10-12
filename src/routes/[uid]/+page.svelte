<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";

	// console.log(data)


</script>


<main>

		
			<h2>{@html prismicH.asHTML(data.title)}</h2>
			<p>{@html prismicH.asHTML(data.date)}</p>

			<img src={data.image.url} alt="we-love-web-img" />
	
		<article >{@html prismicH.asHTML(data.content)}</article>

</main>

<style>
	img {
		width: 30%;
	}

	main{
		margin:2rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		color: #38ad72;
		
	}

	article {
	
		line-height: 150%;
		width: 40rem;
		font-size: 1rem;

		
	}


</style>
