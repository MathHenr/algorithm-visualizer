import { Container } from "@/components/Container";

export function Content() {
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
        <p>
          Em JavaScript, um array armazena valores que podem ser de tipos
          variados sequencialmente, já em outras linguagens os arrays devem
          conter apenas elementos da mesma tipagem. Como este projeto foi
          projetado para implementar boas práticas, deixarei apenas a tipagem de
          number.
        </p>
      </div>
    </Container>
  );
}
