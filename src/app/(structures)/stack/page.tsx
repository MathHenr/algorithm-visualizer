import { Container } from "@/components/Container";
import { Content } from "./content";
import { Header } from "@/components/Header";
import { Wrapper } from "@/components/Wrapper";

export default function StackPage() {
  return (
    <Container>
      <Content />
      <Header
        title="Visualizador de Stack"
        subTitle="Uso do princípio LIFO (last in first out)."
      />

      {/* Here goes animation box */}
      <Wrapper className="flex flex-wrap gap-4">
        <h1>teste1</h1>
      </Wrapper>
    </Container>
  );
}
