import { Container } from "@/components/Container";
import { Content } from "./content";
import { Header } from "@/components/Header";

export default function StackPage() {
  return (
    <Container>
      <Content />
      <Header
        title="Visualizador de Stack"
        subTitle="Uso do princípio LIFO (last in first out)."
      />

      {/* Here goes animation box */}
    </Container>
  );
}
