import { Wrapper } from "@/components/Wrapper";

export function Content() {
  return (
    <Wrapper className="flex-col justify-center gap-4 p-4">
      <h1 className="font-extrabold text-3xl text-slate-900/80 sm:text-4xl">
        Stack
      </h1>
      <div className="space-y-2 text-slate-800">
        <p>
          Uma pilha (stack em inglês) é uma estrutura de dados que segue o
          princípio LIFO (Last In, First Out - Último a Entrar, Primeiro a
          Sair). Isso significa que o último elemento adicionado à pilha é o
          primeiro a ser removido, assim como uma pilha de pratos: você coloca
          pratos no topo e remove o mais recente adicionado.
        </p>
        <span>
          Pilhas são extremamente eficientes quando falamos de suas operações
          com tempo constante O(1).
        </span>
        <p>
          Pilhas são uma das estruturas de dados fundamentais em programação,
          especialmente úteis em cenários onde a ordem de processamento é
          importante e segue o padrão LIFO. Em JavaScript, sua implementação é
          simples e eficiente, podendo ser utilizada desde validação de sintaxe
          até navegação em histórico.
        </p>
      </div>
    </Wrapper>
  );
}
