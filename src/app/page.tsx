import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const urls = [
    { structure: "Array", link: "/array", image: "/images/array.png" },
    { structure: "Stack", link: "/stack", image: "/images/stack.png" },
  ];

  return (
    <>
      <h1 className="text-2xl font-extrabold border-b-2 border-b-slate-400/70 text-slate-800 mb-8">
        Data Structure Visualizer
      </h1>
      <div className="flex flex-col gap-4 mb-8">
        <p>
          Este projeto foi criado com o intuito de me fazer praticar fundamentos
          de estrutura de dados que aprendi estudando o livro de Groner{" "}
          <cite className="font-bold">
            &quot;Estrutura de dados e algoritmos com Javascript&quot;
          </cite>
          , aqui vou escrever as definições que aprendi sobre cada estrutura,
          implementando as classes e seus respectivos métodos além de tentar
          criar uma maneira visual para compreender melhor como cada estrutura
          funciona executando determinadas funções.
        </p>
        <p>
          Este projeto foi escrito exclusivamente em Typescript, por ser a
          linguagem cuja eu tenha mais facilidade, porém isto não significa que
          a domine por completo, utilizei Next.JS já que era o framework que eu
          queria me aprimorar, juntamente com TailwindCSS para estilização.
          Neste projeto tive meu primeiro contato com o Framer Motion para criar
          as animações. Também foi parte do foco principal colocar em prática
          aprendizado de projeto, versionamento com Git, boas práticas, e tentar
          chegar o mais próximo possível de um projeto &quot;profissional&quot;.
        </p>
      </div>
      <div className="flex border-b-2 border-b-slate-400/70 text-slate-800 mb-8 p-2">
        <span className="font-bold text-2xl text-slate-900/80">
          Estruturas de dados
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {urls.map((item, index) => {
          return (
            <Link
              className="w-full sm:max-w-70 flex flex-col group overflow-hidden rounded shadow-sm duration-500 hover:shadow-xl"
              key={index}
              href={item.link}
            >
              <Image
                src={item.image}
                width={1080}
                height={1920}
                alt={item.structure}
                className="w-full sm:max-w-70 sm:h-40 object-center object-cover sm:group-hover:scale-110 group-hover:scale-105 transition-all"
                aria-label={item.structure}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
