<script>
    import * as prismicH from '@prismicio/helpers';
    export let data
 
    const { document }  = data

console.log(data)
</script>





    <ul>
        {#each data.document as data}
        <li><a href="/{data.uid}">{@html prismicH.asHTML(data.data.title)}</a> </li>
        {/each}

        {#each data.document as data}
        <li><img src="{data.data.image.url}" alt="we-love-web-img"></li>
        {/each}

        {#each data.document as data}
        <li> <a href="/{data.uid}">{@html prismicH.asHTML(data.data.content)}</a> </li>
        {/each}

        {#each data.document as data}
        <li> <a href="/{data.uid}">{@html prismicH.asHTML(data.data.date.text)}</a> </li>
        {/each}
        
    </ul>