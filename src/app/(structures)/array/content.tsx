import { Wrapper } from "@/components/Wrapper";

export function Content() {
  return (
    <Wrapper className="flex-col justify-center gap-4 p-4">
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
        <p>
          Aqui temos 3 botões:{" "}
          <span className="font-bold text-slate-900/90">INSERIR</span> que tem
          função de inserir um dado valor a um índice específico ou ao próximo
          índice do array.{" "}
          <span className="font-bold text-slate-900/90">BUSCAR</span> que
          procura o valor determinado dentro do array, caso exista retorna o
          índice que o valor foi encontrado ou Null. E por fim temos{" "}
          <span className="font-bold text-slate-900/90">DELETAR</span> que
          remove o índice determinado pelo usuário.
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
      </div>
    </Wrapper>
  );
}
