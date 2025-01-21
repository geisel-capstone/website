import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Resources } from "@/app/_components/resource-pages";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <Resources posts={allPosts} />
      </Container>
    </main>
  );
}
