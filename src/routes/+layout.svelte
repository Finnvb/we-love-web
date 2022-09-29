<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '../styles/global.css'
    import Page from './+page.svelte';
</script>


<Header name={'We love web - Blog'}/>



<slot></slot>

<Footer madeBy={'Made By Finn'}/>