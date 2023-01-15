const NAO_LIMPAR_TELA = false;
const LIMPAR_TELA = true;

export default class CalculadoraModel {
  #valor: string;
  #acumulador: number;
  #operacao: string;
  #limparTela: boolean;

  constructor(
    valor: string = null,
    acumulador: number = null,
    operacao: string = null,
    limparTela: boolean = false
  ) {
    this.#valor = valor;
    this.#acumulador = acumulador;
    this.#operacao = operacao;
    this.#limparTela = limparTela;
  }

  get valor(): string {
    return this.#valor?.replace(".", ",") || "0";
  }

  numeroDigitado(novoValor: string): CalculadoraModel {
    return new CalculadoraModel(
      this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA
    );
  }

  pontoDigitado(): CalculadoraModel {
    return new CalculadoraModel(
      !this.#valor || this.#valor?.includes(".")
        ? this.#valor
        : this.#valor + ".",
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA
    );
  }

  limparTela(): CalculadoraModel {
    return new CalculadoraModel();
  }

  operacaoDigitada(proximaOperacao: string): CalculadoraModel {
    return this.calcular(proximaOperacao);
  }

  calcular(proximaOperacao: string = null): CalculadoraModel {
    const acumulador = !this.#operacao
      ? parseFloat(this.#valor)
      : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`);
    const valor = !this.#operacao ? this.#valor : `${acumulador}`;

    return new CalculadoraModel(
      valor,
      acumulador,
      proximaOperacao,
      proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA
    );
  }
}
