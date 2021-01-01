import { Container } from "@/components/Container";
import WorkSeo from "@/components/WorkSeo";

export default function ProjectgLayout({ children, frontMatter }: any) {
  return (
    <Container>
      <WorkSeo {...frontMatter} />
      <article className="prose md:prose-lg mt-20 dark:prose-dark mx-6 max-w-3xl">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <div>{children}</div>
      </article>
    </Container>
  );
}
