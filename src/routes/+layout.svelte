<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '../styles/global.css'
    import Page from './+page.svelte';

    import PageTransition from '$lib/components/PageTransition.svelte';

    /** @type {import('./$types').LayoutData} */
export let data;

</script>


<Header name={'We love web - Blog'}/>


<PageTransition pathname={data.pathname}>
<slot></slot>

</PageTransition>

<Footer madeBy={'Made By Finn'}/>