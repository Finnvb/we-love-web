<script>

  export let name;
</script>


<header>
    <h1>{name}</h1>
  
    <a href="/">Home</a>
  </header>
  
 
  
  
  <style>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 1rem;
  background-color: #3ab97a;
    }

    a{
      text-decoration: none;
      background-color: #2b895a;
      padding: 1rem;
      color: #ffffff;
      border-radius: 0.5rem;
      font-size: 1rem;

    }

    a:hover{
      background-color: #226845;
    }


    @media(max-width:40rem){

h1{
  font-size: 1.2rem;
}

a{
  font-size: 0.8rem;
  padding: 0.6rem;
}
}
  
  </style>