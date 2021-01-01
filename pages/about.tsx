import { Container } from "@/components/Container";
export default function About() {
  return (
    <Container>
      <div className="mt-20 flex flex-col text-center px-4 text-black dark:text-white text-3xl font-extrabold max-w-2xl">
        <div>{"Performance, "}</div>
        <div>{"without sacrificing personalization."}</div>
      </div>
    </Container>
  );
}
