import { Container } from "@/components/Container";
import { ExpandingCard } from "@/components/ExpandingCard";
export default function About() {
  return (
    <Container>
      <div className="mt-20 flex flex-col text-center px-4 text-black dark:text-white text-3xl font-extrabold max-w-2xl">
        <div>{"Performance, "}</div>
        <div>{"without sacrificing personalization."}</div>
        <div className="my-5 space-y-4">
          <ExpandingCard title="Performance" info="info" href="/about" />
          <ExpandingCard title="Design" info="info" href="/about" />
          <ExpandingCard title="Branding" info="info" href="/about" />
        </div>
      </div>
    </Container>
  );
}
