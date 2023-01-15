<script lang="ts">
  export let texto : string;
  export let triplo : boolean = false;
  export let duplo : boolean = false;
  export let operacao : boolean = false;
  export let destaque : boolean = false;

  export let onClick: (valor : string) => void = () => {};
</script>

<button class="botao" 
  on:click={() => onClick(texto)}
  class:triplo class:duplo class:operacao class:destaque>
  {texto}
</button>

<style>
  .botao {
    flex-basis: 25%;
    margin: 0;
    border: 1px solid var(--cor-fundo);
    font-weight: bold;
  }
  .duplo {
    flex-basis: 50%;
  }
  .triplo {
    flex-basis: 75%;
  }
  .operacao {
    background-color: orange;
    color: white;
  }
  .operacao:active {
    background-color: rgb(225, 165, 0);
  }
  .destaque {
    background-color: red;
    color: white;
  }
  .destaque:active {
    background-color: rgb(225, 0, 0);
  }
</style>
