<script lang="ts">
  import CalculadoraModel from "../model/CalculadoraModel";
  import Botao from "./Botao.svelte";
  import Linha from "./Linha.svelte";
  import Tela from "./Tela.svelte";

  let calc = new CalculadoraModel();

  const numeroDigitado = (num: string) => calc = calc.numeroDigitado(num);
  const operacaoDigitada = (op: string) => calc = calc.operacaoDigitada(op);
  const calcular = () => calc = calc.calcular();
  const pontoDigitado = () => calc = calc.pontoDigitado();
  const limparTela = () => calc = calc.limparTela();
</script>
<div class="calculadora">
  <Tela valor={calc.valor} />
  <Linha>
    <Botao destaque triplo texto="AC" onClick={limparTela} />
    <Botao operacao texto="/" onClick={operacaoDigitada} />
  </Linha>
  <Linha>
    <Botao texto="7" onClick={numeroDigitado} />
    <Botao texto="8" onClick={numeroDigitado} />
    <Botao texto="9" onClick={numeroDigitado} />
    <Botao operacao texto="*" onClick={operacaoDigitada} />
  </Linha>
  <Linha>
    <Botao texto="4" onClick={numeroDigitado} />
    <Botao texto="5" onClick={numeroDigitado} />
    <Botao texto="6" onClick={numeroDigitado} />
    <Botao operacao texto="+" onClick={operacaoDigitada} />
  </Linha>
  <Linha>
    <Botao texto="1" onClick={numeroDigitado} />
    <Botao texto="2" onClick={numeroDigitado} />
    <Botao texto="3" onClick={numeroDigitado} />
    <Botao operacao texto="-" onClick={operacaoDigitada} />
  </Linha>
  <Linha>
    <Botao duplo texto="0" onClick={numeroDigitado} />
    <Botao texto="," onClick={pontoDigitado} />
    <Botao destaque texto="=" onClick={calcular} />
  </Linha>
</div>


<style>
  .calculadora {
    display: flex;
    flex-direction: column;
    width: 9.375rem;
    height: 13.75rem;
    background-color: var(--cor-fundo);
    padding: .625rem;
    border-radius: .625rem;
  }
</style>
