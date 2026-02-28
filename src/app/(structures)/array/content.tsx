import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container } from "@/components/Container";

export function Content() {
  const structure = `class ArrayStructure<T> {
    #items: Array<T | null>;

    constructor(size: number) {
      this.#items = new Array(size).fill(null);
    }

    find(value: T): AnimationStep[] {
      // Do a linear search, once the array could be unsorted,
      // and return AnimationStep[] that deals with animation.
    }

    delete(index: number) {
      // Delete the given index with splice() method.
    }

    update(index: number, value: T) {
      // Insert value at the given index
    }

    get() {
      // Return array state.
    }
  }`;

  return (
    <Container className="flex-col justify-center gap-4 p-4">
      <h1 className="font-extrabold text-3xl text-slate-900/80 sm:text-4xl">
        Array
      </h1>
      <div className="space-y-2 text-slate-800">
        <p>
          Um array é a estrutura mais simples possível que é armazenada em
          memória. Por esse motivo todas as linguagens de programação têm, de
          maneira padrão, um tipo de array incluso. Em Javascript, os arrays tem
          alguns métodos nativos para manipulação dos elementos do array, como
          exemplo de alguns deles: push(), unshift(), pop(), shift(). Além de
          permitir diversos métodos de iteração pelo array.
        </p>
        <span>
          Os arrays ocupam espaços contiguous na memória, ou seja, ficam lado a
          lado sequencialmente, tendo tempo de execução de leitura O(n) mas para
          acessar posições aleatórias tem tempo de execução constante O(1). Uma
          indicação de leitura para entender mais sobre arrays é o{" "}
          <span className="font-bold text-slate-900/90">
            capítulo 2 - Seleção por ordenação do livro{" "}
            <cite>&quot;Entendendo Algoritmos&quot;</cite> de Aditya Y.
            Bhargava.
          </span>
        </span>
        <p>
          Em JavaScript, um array armazena valores que podem ser de tipos
          variados sequencialmente, já em outras linguagens os arrays devem
          conter apenas elementos da mesma tipagem. Como este projeto foi
          projetado para implementar boas práticas, deixarei apenas a tipagem de
          number.
        </p>
        <span className="text-base font-bold text-slate-800/80">
          Aqui mostro como foi construído a classe dessa sessão.
        </span>
        <span className="rounded-xl overflow-hidden">
          <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
            {structure}
          </SyntaxHighlighter>
        </span>
      </div>
    </Container>
  );
}
