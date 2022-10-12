<script>
    import * as prismicH from "@prismicio/helpers";
    export let data;

    const { document } = data;

    // console.log(data)
</script>

<main>
    {#each data.document as data}
        <a href="/{data.uid}">
            <article>
                <ul>
                    <li>
                        {@html prismicH.asHTML(data.data.title)}
                    </li>
                    <li>{@html prismicH.asHTML(data.data.date)}</li>
                    <li>
                        <img src={data.data.image.url} alt="we-love-web-img" />
                    </li>
                </ul>
            </article>
        </a>
    {/each}
    

</main>

<style>
    img {
        width: 250px;
        height: 100%;
        border: 4px solid #16462e;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 3rem;
        margin: 2rem 0;

    }



    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        list-style: none;
    }

    article {
        width: 20rem;
        height: 20rem;
        background-color:#24724b;
        display: flex;
        justify-content: center;
        border-radius: 1rem;
    }

    a{
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
    }

 

</style>
