import { Container } from "@/components/Container";
import { ExpandingCard } from "@/components/ExpandingCard";
export default function Contact() {
  return (
    <Container>
      <div className="h-full min-h-screen flex flex-col text-center px-4 text-black dark:text-white text-3xl font-extrabold max-w-2xl">
        <div className="mt-20">{"Performance, "}</div>
        <div className="mb-2">{"without sacrificing personalization."}</div>
      </div>
    </Container>
  );
}
