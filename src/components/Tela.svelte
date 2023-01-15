<script lang="ts">
  export let valor : string;
  $: tamanhoFonte = valor.length > 20 ? 'pequena' : `s-${valor.length}`;
</script>
<div class={`tela ${tamanhoFonte}`}>
  <span>{valor}</span>
</div>

<style>
  .tela {
    display: flex;
    flex: 1;
    background-color: aliceblue;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 5px;
    overflow: hidden;
    font-size: 1.7rem;
    margin: 2px 1px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .s-10 { font-size: 1.5rem; }
  .s-11 { font-size: 1.35rem; }
  .s-12 { font-size: 1.25rem; }
  .s-13 { font-size: 1.15rem; }
  .s-14 { font-size: 1.07rem; }
  .s-15 { font-size: 1.0rem; }
  .s-16 { font-size: .93rem; }
  .s-17 { font-size: .87rem; }
  .s-18 { font-size: .83rem; }
  .s-19 { font-size: .78rem; }
  .s-20 { font-size: .74rem; }

  .pequena { font-size: .6rem; }
</style>
